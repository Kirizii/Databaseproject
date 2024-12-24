import pymysql
from fastapi import FastAPI, HTTPException, Depends
from sqlalchemy import Column, Integer, String, Text, create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session

DATABASE_URL = "mysql+pymysql://root:almak20@localhost:3306/database"
if not DATABASE_URL:
    raise ValueError("DATABASE_URL is not set")
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()


class Result(Base):
    __tablename__ = "result"
    id = Column(Integer, primary_key=True, index=True)
    result_name = Column(String(45), nullable=False)
    result_description = Column(Text, nullable=False)


Base.metadata.create_all(bind=engine)

app = FastAPI()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# Schemas
from pydantic import BaseModel


class ResultBase(BaseModel):
    result_name: str
    result_description: str


class ResultCreate(ResultBase):
    pass


class ResultResponse(ResultBase):
    id: int

    class Config:
        orm_mode = True

@app.post("/results/", response_model=ResultResponse)
def create_result(result: ResultCreate, db: Session = Depends(get_db)):
    db_result = Result(**result.dict())
    db.add(db_result)
    db.commit()
    db.refresh(db_result)
    return db_result


@app.get("/results/{result_id}", response_model=ResultResponse)
def read_result(result_id: int, db: Session = Depends(get_db)):
    db_result = db.query(Result).filter(Result.id == result_id).first()
    if db_result is None:
        raise HTTPException(status_code=404, detail="Result not found")
    return db_result


@app.put("/results/{result_id}", response_model=ResultResponse)
def update_result(result_id: int, updated_result: ResultCreate, db: Session = Depends(get_db)):
    db_result = db.query(Result).filter(Result.id == result_id).first()
    if db_result is None:
        raise HTTPException(status_code=404, detail="Result not found")

    for key, value in updated_result.dict().items():
        setattr(db_result, key, value)

    db.commit()
    db.refresh(db_result)
    return db_result


@app.delete("/results/{result_id}", response_model=dict)
def delete_result(result_id: int, db: Session = Depends(get_db)):
    db_result = db.query(Result).filter(Result.id == result_id).first()
    if db_result is None:
        raise HTTPException(status_code=404, detail="Result not found")
    db.delete(db_result)
    db.commit()
    return {"detail": "Result deleted successfully"}

