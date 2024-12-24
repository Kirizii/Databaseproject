import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,e as s,o as l}from"./app-eGia-t5c.js";const r={};function d(a,e){return l(),n("div",null,e[0]||(e[0]=[s(`<h1 id="реалізація-інформаціиного-та-програмного-забезпечення" tabindex="-1"><a class="header-anchor" href="#реалізація-інформаціиного-та-програмного-забезпечення"><span>Реалізація інформаційного та програмного забезпечення</span></a></h1><h2 id="sql-скрипти-для-ініціалізаціі-та-наповнення-бази-даних" tabindex="-1"><a class="header-anchor" href="#sql-скрипти-для-ініціалізаціі-та-наповнення-бази-даних"><span>SQL скрипти для ініціалізації та наповнення бази даних</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>CREATE TABLE Permission (
    id INT SERIAL PRIMARY KEY,
    name_of_permission VARCHAR(45) NOT NULL,
    description_of_permission TEXT NOT NULL,
    role_permission INT NOT NULL,
    FOREIGN KEY (role_permission) REFERENCES Role(id) ON DELETE CASCADE
);

CREATE TABLE Role (
    id INT SERIAL PRIMARY KEY,
    role_name VARCHAR(45) NOT NULL, 
    user_role INT,
    role_description TEXT NOT NULL,
    FOREIGN KEY (user_role) REFERENCES User(id) ON DELETE SET NULL
);

CREATE TABLE User (
    id INT SERIAL PRIMARY KEY,
    user_name VARCHAR(45) NOT NULL, 
    user_lastname VARCHAR(45) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);

CREATE TABLE Survey (
    id INT SERIAL PRIMARY KEY,
    survey_name VARCHAR(45) NOT NULL,
    survey_description TEXT NOT NULL,
    survey_result INT NULL,
    survey_user INT NOT NULL,
    FOREIGN KEY (survey_result) REFERENCES Result(id) ON DELETE SET NULL,
    FOREIGN KEY (survey_user) REFERENCES User(id) ON DELETE CASCADE
);

CREATE TABLE Result (
    id INT SERIAL PRIMARY KEY,
    result_name VARCHAR(45) NOT NULL,
    result_description TEXT NOT NULL
);

INSERT INTO User (user_name, user_lastname, user_password) 
VALUES 
(&#39;John&#39;, &#39;Doe&#39;, &#39;hashed_password_1&#39;),
(&#39;Jane&#39;, &#39;Smith&#39;, &#39;hashed_password_2&#39;),
(&#39;Alice&#39;, &#39;Johnson&#39;, &#39;hashed_password_3&#39;);

INSERT INTO Role (role_name, user_role, role_description) 
VALUES 
(&#39;Admin&#39;, 1, &#39;Administrator role with full permissions&#39;),
(&#39;Editor&#39;, 2, &#39;Editor role with content management permissions&#39;),
(&#39;Viewer&#39;, NULL, &#39;Viewer role with read-only access&#39;);

INSERT INTO Permission (name_of_permission, description_of_permission, role_permission) 
VALUES 
(&#39;View Content&#39;, &#39;Allows viewing of all content&#39;, 3),
(&#39;Edit Content&#39;, &#39;Allows editing existing content&#39;, 2),
(&#39;Manage Users&#39;, &#39;Allows managing user accounts&#39;, 1),
(&#39;Delete Content&#39;, &#39;Allows deletion of content&#39;, 1);

INSERT INTO Result (result_name, result_description) 
VALUES 
(&#39;Completed&#39;, &#39;The survey was successfully completed&#39;),
(&#39;In Progress&#39;, &#39;The survey is still being filled out&#39;),
(&#39;Failed&#39;, &#39;The survey submission failed&#39;);


INSERT INTO Survey (survey_name, survey_description, survey_result, survey_user) 
VALUES 
(&#39;Customer Satisfaction Survey&#39;, &#39;Survey about customer satisfaction&#39;, 1, 1),
(&#39;Employee Feedback Survey&#39;, &#39;Collecting feedback from employees&#39;, 2, 2),
(&#39;Website Usability Survey&#39;, &#39;Survey to evaluate website usability&#39;, NULL, 3);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const o=i(r,[["render",d],["__file","index.html.vue"]]),m=JSON.parse('{"path":"/software/","title":"Реалізація інформаційного та програмного забезпечення","lang":"en-US","frontmatter":{"description":"Реалізація інформаційного та програмного забезпечення SQL скрипти для ініціалізації та наповнення бази даних ","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/DB_COURSE_WORK/software/"}],["meta",{"property":"og:site_name","content":"PulseVote"}],["meta",{"property":"og:title","content":"Реалізація інформаційного та програмного забезпечення"}],["meta",{"property":"og:description","content":"Реалізація інформаційного та програмного забезпечення SQL скрипти для ініціалізації та наповнення бази даних "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-12-11T23:39:20.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-11T23:39:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Реалізація інформаційного та програмного забезпечення\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-11T23:39:20.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"SQL скрипти для ініціалізації та наповнення бази даних","slug":"sql-скрипти-для-ініціалізаціі-та-наповнення-бази-даних","link":"#sql-скрипти-для-ініціалізаціі-та-наповнення-бази-даних","children":[]}],"git":{"createdTime":1708081508000,"updatedTime":1733960360000,"contributors":[{"name":"Dmytro Zanuda","email":"dmzanuda.work@gmail.com","commits":1},{"name":"Maks","email":"143129096+manabr0w@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1,"words":299},"filePathRelative":"software/README.md","localizedDate":"February 16, 2024","autoDesc":true}');export{o as comp,m as data};
