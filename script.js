// Theme toggle functionality
const storageKey = 'theme-preference';

const theme = {
    value: getColorPreference(),
};

function getColorPreference() {
    if (localStorage.getItem(storageKey)) {
        return localStorage.getItem(storageKey);
    } else {
        return window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';
    }
}

function setPreference() {
    localStorage.setItem(storageKey, theme.value);
    reflectPreference();
}

function reflectPreference() {
    document.firstElementChild.setAttribute('data-theme', theme.value);
    document.querySelector('#theme-toggle')?.setAttribute('aria-label', theme.value);
}

function onClick() {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
    setPreference();
}

// Content for different sections
const content = {
    projects: `
        <section id="projects" class="content-section">
            <!-- <h2>Self-Learning Projects</h2> -->
            <div id="project-categories" class="project-categories">
            <!-- Category buttons will go here -->
            </div>
            <div class="projects-grid" id="projects-grid">
                <div class="project-card card" data-project-id="project1"></div>
                <div class="project-card card" data-project-id="project5"></div>
                <div class="project-card card" data-project-id="project6"></div>
                <div class="project-card card" data-project-id="project2"></div>
                <div class="project-card card" data-project-id="project3"></div>
                <div class="project-card card" data-project-id="project4"></div>
            </div>
        </section>
    `,
    experience: `
        <section id="experience" class="content-section">
            <h2>Experience</h2>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-content card">
                        <h3>Data Analyst @ Broadsy Technologies</h3> <!-- , Ahmedabad, Gujarat, India (Add this later) -->
                        <span>Jul 2021 - Apr 2023</span>
                        <p>At Broadsy Technologies, I served as a Data Analyst specializing in transforming complex datasets into actionable insights and developing AI-powered solutions for clients. My role involved data analysis, AI application development, and cross-functional collaboration. I conducted comprehensive data analyses to inform strategic decision-making and developed interactive dashboards using Tableau and Plotly, enhancing stakeholder data visibility. By optimizing data processing tasks, I achieved a 25% reduction in data processing time. I collaborated with the AI Engineering team to develop AI-driven applications, including chatbots and product recommendation systems, which improved client sales forecasting accuracy by 15% and increased customer engagement by 30% through NLP features.</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-content card">
                        <h3>Web Development Intern @ WeTheDevelopers</h3> <!-- , Rajkot, Gujarat, India (Add this later) -->
                        <span>Jan 2021 - Jun 2021</span>
                        <p>During my Bachelor's degree in Computer Applications at Christ College Rajkot, I completed a six-month internship at WeTheDevelopers, a company specializing in website design, custom programming, and site maintenance. I was actively involved in web development and database-related applications, successfully developing web assignments that showcased my skills in front-end and back-end technologies. This hands-on experience allowed me to apply my academic knowledge to real-world projects, deepening my understanding of web technologies and database management systems.</p>
                    </div>
                </div>
                <!-- Add more experience entries here if needed -->
            </div>
            <h2>Awards and Recognition</h2>
            <div class="projects-grid" id="AwardsandRecognition-grid">
                <!-- Awards and Recognition cards will be dynamically inserted here -->
            </div>
        </section>
    `,
    education: `
        <section id="education" class="content-section">
    <h2>Education</h2>
    <div class="timeline">
        <!-- Humber College -->
        <div class="timeline-item">
            <div class="timeline-content card">
                <h3>Post Graduate Diploma in Artificial Intelligence with Machine Learning</h3>
                <p style="font-size: 70%;">Data Analytics • Mathematics for Machine Learning • Machine Learning and Deep Learning • Machine Learning in Cloud Computing • Artificial Intelligence Project Management • Artificial Intelligence Capstone Project Preparation • Career Development in Artificial Intelligence • Advanced Deep Learning • Natural Language Processing • Image Processing and Computer Vision • Artificial Intelligence for Business Decision Making • Emerging Technologies in Artificial Intelligence • Artificial Intelligence Capstone Project</p>
                <span>Jan 2024 - Aug 2024</span>
                <p>Humber College, Torronto, ON, Canada</p>
                <p>Grade: <strong>81.32</strong></p>
            </div>
        </div>

        <!-- Conestoga College -->
        <div class="timeline-item">
            <div class="timeline-content card">
                <h3>Post Graduate Diploma in Big Data Solutions Architecture</h3>
                <p style="font-size: 70%;">Relational Database Design • NoSQL Database Implementation • Programming for Big Data • Software Quality • Web Analytics and Business Intelligence Tools • Ethics and Security • Emerging Trends in Big Data • Data Analysis Mathematics, Algorithms and Modeling • Big Data Integration and Storage • Case Studies</p>
                <span>May 2023 - Dec 2023</span>
                <p>Conestoga College, Kitchener, ON, Canada</p>
                <p>Grade: <strong>78.36</strong></p>
            </div>
        </div>

        <!-- Saurashtra University -->
        <div class="timeline-item">
            <div class="timeline-content card">
                <h3>Bachelor's of Computer Application in Computer Science</h3>
                <p style="font-size: 70%;">Fundamentals of Computers • C Programming • Data Structures and Algorithms • Operating Systems • Database Management Systems • Software Engineering • Web Development • Computer Networks • Artificial Intelligence • Cloud Computing</p>
                <span>Jun 2018 - Mar 2021</span>
                <p>Saurashtra University, Rajkot, GJ, India</p>
                <p>Grade: <strong>71.30</strong></p>
            </div>
        </div>
    </div>

    <!-- Certifications Section -->
    <h2>Certifications</h2>
    <div class="projects-grid" id="certifications-grid">
        <!-- Certification cards will be dynamically inserted here -->
    </div>
</section>
    `,
    skills: `
        <section id="skills" class="content-section">
            <h2>Skills and Expertise</h2>
            
            <!-- Core Technical Skills -->
            <div class="skills-category">
                <hr style="height:2px;border-width:0;color: var(--text-color);background-color:var(--text-color)">
                <h4 align="center">Core Technical Skills</h3>

                <!-- Programming Languages -->
                <strong>Programming Languages</strong>
                <ul class="skills-list">
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>Java</li>
                    <li>C++</li>
                    <li>SQL</li>
                </ul>

                <!-- Web Development -->
                <strong>Web Development</strong>
                <ul class="skills-list">
                    <li>HTML5/CSS3</li>
                    <li>Django/Flask</li>
                </ul>

                <!-- Data Science & ML -->
                <strong>Data Science & Machine Learning</strong>
                <ul class="skills-list">
                    <li>Pandas, NumPy, Scikit-learn</li>
                    <li>TensorFlow, PyTorch</li>
                    <li>Natural Language Processing</li>
                    <li>Computer Vision (OpenCV)</li>
                    <li>Deep Learning (CNN, RNN, Transformers)</li>
                </ul>

                <!-- Databases -->
                <strong>Database Technologies</strong>
                <ul class="skills-list">
                    <li>MySQL, PostgreSQL</li>
                    <li>MongoDB</li>
                    <li>Database Design & Optimization</li>
                    <li>ETL Processes</li>
                </ul>
            </div>

            <!-- Cloud & Tools -->
            <div class="skills-category">
                <hr style="height:2px;border-width:0;color: var(--text-color);background-color:var(--text-color)">
                <h4 align="center">Cloud & Development Tools</h3>

                <!-- Cloud Services -->
                <strong>Cloud Services</strong>
                <ul class="skills-list">
                    <li>AWS (EC2, S3, Lambda, SageMaker)</li>
                    <li>Docker</li>
                    <li>CI/CD Pipelines</li>
                </ul>

                <!-- Development Tools -->
                <strong>Development Tools</strong>
                <ul class="skills-list">
                    <li>Git/GitHub</li>
                    <li>VS Code, PyCharm</li>
                    <li>Jupyter Notebooks</li>
                    <li>Postman</li>
                </ul>

                <!-- Analytics & Visualization -->
                <strong>Analytics & Visualization</strong>
                <ul class="skills-list">
                    <li>Tableau</li>
                    <li>Power BI</li>
                    <li>Matplotlib/Seaborn</li>
                </ul>
            </div>

            <!-- Professional Skills -->
            <div class="skills-category">
                <hr style="height:2px;border-width:0;color: var(--text-color);background-color:var(--text-color)">
                <h4 align="center">Professional Skills</h3>

                <!-- Project Management -->
                <strong>Project Management</strong>
                <ul class="skills-list">
                    <li>Agile/Scrum Methodology</li>
                    <li>Technical Leadership</li>
                    <li>Project Planning & Execution</li>
                </ul>

                <!-- Soft Skills -->
                <strong>Soft Skills</strong>
                <ul class="skills-list">
                    <li>Problem Solving</li>
                    <li>Technical Communication</li>
                    <li>Team Collaboration</li>
                </ul>
            </div>
        </section>
    `,
/*    skills: `
        <section id="skills" class="content-section">
            <h2>Skills and Learnings</h2>
            <!-- Technical Skills -->
            <div class="skills-category">
                <hr style="height:2px;border-width:0;color: var(--text-color);background-color:var(--text-color)">
                <h4 align="center">Technical Skills</h3>

                <!-- Programming Languages -->
                <strong>Programming Languages</strong>
                <ul class="skills-list">
                    <li>Python</li>
                    <li>Java</li>
                    <li>C</li>
                    <li>C++</li>
                    <li>C#</li>
                    <li>PHP</li>
                    <li>JavaScript</li>
                    <li>SQL (Structured Query Language)</li>
                    <li>PL/SQL</li>
                    <li>NoSQL Query Languages (e.g., MongoDB Query Language, Cassandra Query Language, HiveQL)</li>
                    <li>R</li>
                    <li>MATLAB</li>
                    <li>Scala (Basics)</li>
                </ul>

                <!-- Frontend Technologies -->
                <strong>Frontend Technologies</strong>
                <ul class="skills-list">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>AJAX</li>
                    <li>WordPress (custom post types, widgets, REST API)</li>
                </ul>

                <!-- Backend Technologies -->
                <strong>Backend Technologies</strong>
                <ul class="skills-list">
                    <li>Flask (Python)</li>
                    <li>Django (Python)</li>
                    <li>ASP.NET (Web Forms, MVC model)</li>
                    <li>JSP and Servlets (Java)</li>
                    <li>PHP (form handling, sessions, MySQL integration)</li>
                </ul>

                <!-- Frameworks and Libraries -->
                <strong>Frameworks and Libraries</strong>

                <!-- Data Analysis Libraries -->
                <p style="font-size: 90%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Data Analysis Libraries</p>
                <ul class="skills-list">
                    <li>Pandas (Python)</li>
                    <li>NumPy (Python)</li>
                </ul>

                <!-- Data Visualization Libraries -->
                <p style="font-size: 90%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Data Visualization Libraries</p>
                <ul class="skills-list">
                    <li>Matplotlib</li>
                    <li>Seaborn</li>
                    <li>Plotly</li>
                </ul>

                <!-- Machine Learning Libraries -->
                <p style="font-size: 90%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Machine Learning Libraries</p>
                <ul class="skills-list">
                    <li>Scikit-learn</li>
                    <li>TensorFlow</li>
                    <li>Keras</li>
                    <li>PyTorch</li>
                </ul>

                <!-- Deep Learning Models -->
                <p style="font-size: 90%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Deep Learning Models</p>
                <ul class="skills-list">
                    <li>Convolutional Neural Networks (CNN)</li>
                    <li>Recurrent Neural Networks (RNN)</li>
                    <li>Transformers</li>
                    <li>Generative Adversarial Networks (GAN)</li>
                    <li>Deep Reinforcement Learning (DRL)</li>
                </ul>

                <!-- NLP Libraries -->
                <p style="font-size: 90%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NLP Libraries</p>
                <ul class="skills-list">
                    <li>NLTK</li>
                    <li>SpaCy</li>
                    <li>Hugging Face Transformers</li>
                    <li>Gensim</li>
                </ul>

                <!-- Computer Vision Libraries -->
                <p style="font-size: 90%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Computer Vision Libraries</p>
                <ul class="skills-list">
                    <li>OpenCV</li>
                    <li>scikit-image</li>
                </ul>

                <!-- Testing Frameworks -->
                <p style="font-size: 90%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Testing Frameworks</p>
                <ul class="skills-list">
                    <li>Selenium</li>
                </ul>

                <!-- Statistical Software Packages -->
                <p style="font-size: 90%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Statistical Software Packages</p>
                <ul class="skills-list">
                    <li>SPSS</li>
                </ul>

                <!-- ORMs and Database Frameworks -->
                <p style="font-size: 90%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ORMs and Database Frameworks</p>
                <ul class="skills-list">
                    <li>SQLAlchemy (Python)</li>
                    <li>Entity Framework (C#)</li>
                </ul>

                <!-- Java Frameworks -->
                <p style="font-size: 90%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Java Frameworks</p>
                <ul class="skills-list">
                    <li>Spring</li>
                    <li>Hibernate</li>
                </ul>

                <!-- Databases -->
                <strong>Databases</strong>

                <!-- Relational Databases -->
                <p style="font-size: 90%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Relational Databases</p>
                <ul class="skills-list">
                    <li>MySQL</li>
                    <li>PostgreSQL</li>
                    <li>Oracle Database</li>
                    <li>SQLite</li>
                </ul>

                <!-- NoSQL Databases -->
                <p style="font-size: 90%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NoSQL Databases</p>
                <ul class="skills-list">
                    <li>MongoDB</li>
                    <li>Cassandra</li>
                    <li>CouchDB</li>
                    <li>Hive</li>
                    <li>Hadoop HDFS</li>
                </ul>

                <!-- Database Concepts -->
                <p style="font-size: 90%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Database Concepts</p>
                <ul class="skills-list">
                    <li>Database Design and Normalization (1NF, 2NF, 3NF)</li>
                    <li>Data Modeling and Entity-Relationship (ER) Diagrams</li>
                    <li>Foreign Keys, Primary Keys, and Constraints</li>
                    <li>Data Warehousing Concepts (ETL processes, OLAP cubes)</li>
                    <li>Data Lake Architecture</li>
                    <li>CAP Theorem (Consistency, Availability, Partition Tolerance)</li>
                </ul>

                <!-- Cloud Services -->
                <p">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cloud Services</p>

                <!-- AWS Services -->
                <p style="font-size: 90%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AWS Services</p>
                <ul class="skills-list">
                    <li>EC2 (Compute)</li>
                    <li>S3 (Storage)</li>
                    <li>Lambda (Serverless Computing)</li>
                    <li>SageMaker (Machine Learning)</li>
                    <li>IAM (Identity and Access Management)</li>
                    <li>CloudWatch (Monitoring)</li>
                </ul>

                <!-- Hadoop Ecosystem Tools -->
                <p style="font-size: 90%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hadoop Ecosystem Tools</p>
                <ul class="skills-list">
                    <li>HDFS</li>
                    <li>MapReduce</li>
                </ul>

                <!-- Other Cloud Services -->
                <p style="font-size: 90%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other Cloud Services</p>
                <ul class="skills-list">
                    <li>Firebase (Android Development)</li>
                    <li>Google BigQuery</li>
                </ul>

                <!-- Cloud Concepts -->
                <p style="font-size: 90%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cloud Concepts</p>
                <ul class="skills-list">
                    <li>Virtualization</li>
                    <li>Scalability</li>
                    <li>Elasticity</li>
                </ul>
            </div>

            <!-- Tools and Platforms -->
            <div class="skills-category">
                <hr style="height:2px;border-width:0;color: var(--text-color);background-color:var(--text-color)">
                <h4 align="center">Tools and Platforms</h3>

                <!-- IDEs and Code Editors -->
                <strong>IDEs and Code Editors</strong>
                <ul class="skills-list">
                    <li>PyCharm</li>
                    <li>Jupyter Notebooks</li>
                    <li>VS Code</li>
                    <li>Eclipse</li>
                    <li>NetBeans</li>
                    <li>IntelliJ IDEA</li>
                    <li>Anaconda</li>
                    <li>RStudio</li>
                    <li>MATLAB</li>
                    <li>Android Studio</li>
                </ul>

                <!-- Version Control -->
                <strong>Version Control</strong>
                <ul class="skills-list">
                    <li>Git</li>
                    <li>GitHub</li>
                </ul>

                <!-- Data Visualization Tools -->
                <strong>Data Visualization Tools</strong>
                <ul class="skills-list">
                    <li>Tableau</li>
                    <li>Power BI</li>
                    <li>Looker</li>
                </ul>

                <!-- Database Tools -->
                <strong>Database Tools</strong>
                <ul class="skills-list">
                    <li>SQL Server Management Studio (SSMS)</li>
                    <li>MySQL Workbench</li>
                    <li>Oracle SQL Developer</li>
                    <li>phpMyAdmin</li>
                    <li>Draw.io (Database Diagramming)</li>
                </ul>

                <!-- Project Management Tools -->
                <strong>Project Management Tools</strong>
                <ul class="skills-list">
                    <li>Trello</li>
                    <li>Microsoft Teams</li>
                    <li>Agile Tools (for Scrum and Kanban methodologies)</li>
                    <li>Calendly (Scheduling)</li>
                </ul>

                <!-- Collaboration Platforms -->
                <strong>Collaboration Platforms</strong>
                <ul class="skills-list">
                    <li>GitHub</li>
                    <li>Microsoft Teams</li>
                </ul>

                <!-- Testing and Debugging Tools -->
                <strong>Testing and Debugging Tools</strong>
                <ul class="skills-list">
                    <li>Selenium (Automated Testing)</li>
                    <li>TensorBoard (Model Visualization)</li>
                </ul>

                <!-- Web Scraping Tools -->
                <strong>Web Scraping Tools</strong>
                <ul class="skills-list">
                    <li>BeautifulSoup</li>
                    <li>Scrapy</li>
                </ul>

                <!-- Cloud Platforms and Services -->
                <strong>Cloud Platforms and Services</strong>
                <ul class="skills-list">
                    <li>AWS Management Console</li>
                    <li>Google Colab</li>
                    <li>PuTTY (SSH Connections)</li>
                    <li>XAMPP/WAMP (PHP Development)</li>
                    <li>Apache Tomcat (Java Applications)</li>
                    <li>Local by Flywheel</li>
                    <li>WP-CLI (WordPress Command Line Interface)</li>
                </ul>

                <!-- Other Tools -->
                <strong>Other Tools</strong>
                <ul class="skills-list">
                    <li>Logstash, Kibana, Elasticsearch (ELK Stack)</li>
                    <li>SPSS (Statistical Analysis)</li>
                    <li>Android SDK</li>
                    <li>Google Search Console</li>
                    <li>SEMrush</li>
                    <li>Yoast SEO</li>
                </ul>
            </div>

            <!-- Database Management -->
            <div class="skills-category">
                <hr style="height:2px;border-width:0;color: var(--text-color);background-color:var(--text-color)">
                <h4 align="center">Database Management</h3>

                <!-- Relational Database Management -->
                <strong>Relational Database Management</strong>
                <ul class="skills-list">
                    <li>Designing and Implementing Relational Databases</li>
                    <li>Database Architecture and Schema Design</li>
                    <li>CRUD Operations (Create, Read, Update, Delete)</li>
                    <li>Indexing and Performance Tuning</li>
                    <li>Query Optimization</li>
                    <li>Database Normalization (1NF, 2NF, 3NF)</li>
                    <li>Entity-Relationship (ER) Modeling</li>
                    <li>Foreign Keys, Primary Keys, and Constraints</li>
                </ul>

                <!-- NoSQL Database Management -->
                <strong>NoSQL Database Management</strong>
                <ul class="skills-list">
                    <li>Schema-less Database Design</li>
                    <li>Data Replication and Partitioning Strategies</li>
                    <li>Sharding and Horizontal Scaling</li>
                    <li>Handling Unstructured and Semi-Structured Data</li>
                    <li>CAP Theorem (Consistency, Availability, Partition Tolerance)</li>
                </ul>

                <!-- Data Warehousing and Integration -->
                <strong>Data Warehousing and Integration</strong>
                <ul class="skills-list">
                    <li>ETL Processes (Extract, Transform, Load)</li>
                    <li>Data Transformation and Integration</li>
                    <li>Data Warehousing Concepts</li>
                    <li>OLAP Cubes</li>
                    <li>Comparative Analysis of Data Warehouses vs. NoSQL Implementations</li>
                    <li>Data Lake Architecture</li>
                </ul>

                <!-- Big Data Management -->
                <strong>Big Data Management</strong>
                <ul class="skills-list">
                    <li>Handling Large Datasets</li>
                    <li>Hadoop Ecosystem Management</li>
                    <li>Data Governance and Quality Assurance</li>
                </ul>

                <!-- Data Security and Privacy -->
                <strong>Data Security and Privacy</strong>
                <ul class="skills-list">
                    <li>Data Security Measures</li>
                    <li>Anonymization and Encryption Techniques</li>
                    <li>Compliance with Data Privacy Regulations (e.g., GDPR, CCPA)</li>
                    <li>Data Integrity and Consistency Maintenance</li>
                </ul>

                <!-- Database Tools and ORMs -->
                <strong>Database Tools and ORMs</strong>
                <ul class="skills-list">
                    <li>SQLAlchemy (Python ORM)</li>
                    <li>Entity Framework (C#)</li>
                    <li>SQL Server Management Studio</li>
                    <li>MySQL Workbench</li>
                </ul>
            </div>

            <!-- Soft Skills -->
            <div class="skills-category">
                <hr style="height:2px;border-width:0;color: var(--text-color);background-color:var(--text-color)">
                <h4 align="center">Soft Skills</h3>

                <!-- Problem-Solving and Analytical Thinking -->
                <strong>Problem-Solving and Analytical Thinking</strong>
                <ul class="skills-list">
                    <li>Data Modeling and Interpretation</li>
                    <li>Distributed Database Challenges</li>
                    <li>Modular Programming</li>
                    <li>Software Testing and Quality Assurance</li>
                    <li>Mathematical Modeling in Machine Learning</li>
                    <li>Data Integration Methods</li>
                    <li>Data Cleaning and Preprocessing</li>
                    <li>Model Selection and Optimization</li>
                    <li>Cloud Infrastructure Deployment</li>
                    <li>Advanced Deep Learning Techniques</li>
                    <li>Textual and Linguistic Analysis</li>
                    <li>Image Processing Challenges</li>
                    <li>Business Problem Solving with AI</li>
                </ul>

                <!-- Project Management and Collaboration -->
                <strong>Project Management and Collaboration</strong>
                <ul class="skills-list">
                    <li>Leadership and Teamwork</li>
                    <li>Agile Methodologies (Scrum, Kanban)</li>
                    <li>Time Management</li>
                    <li>Risk Management</li>
                    <li>Resource Allocation</li>
                    <li>Proposal Writing and Project Planning</li>
                    <li>Stakeholder Communication</li>
                    <li>Conflict Resolution</li>
                </ul>

                <!-- Ethical Decision-Making and Critical Thinking -->
                <strong>Ethical Decision-Making and Critical Thinking</strong>
                <ul class="skills-list">
                    <li>Ethical Use of Data</li>
                    <li>Understanding Data Privacy Regulations</li>
                    <li>Interpreting AI-Based Insights</li>
                </ul>

                <!-- Research and Adaptability -->
                <strong>Research and Adaptability</strong>
                <ul class="skills-list">
                    <li>Emerging Technologies Research</li>
                    <li>Adaptability to New Tools and Technologies</li>
                </ul>

                <!-- Communication Skills -->
                <strong>Communication Skills</strong>
                <ul class="skills-list">
                    <li>Collaborating with Technical and Non-Technical Teams</li>
                    <li>Professional Behavior</li>
                </ul>
            </div>

            <!-- Project Management/Collaboration Tools -->
            <div class="skills-category">
                <hr style="height:2px;border-width:0;color: var(--text-color);background-color:var(--text-color)">
                <h4 align="center">Project Management/Collaboration Tools</h3>

                <!-- Agile Methodologies -->
                <strong>Agile Methodologies</strong>
                <ul class="skills-list">
                    <li>Scrum</li>
                    <li>Kanban</li>
                </ul>

                <!-- Project Management Tools -->
                <strong>Project Management Tools</strong>
                <ul class="skills-list">
                    <li>Trello</li>
                    <li>Microsoft Teams</li>
                    <li>Calendly</li>
                </ul>

                <!-- Version Control Systems -->
                <strong>Version Control Systems</strong>
                <ul class="skills-list">
                    <li>Git</li>
                    <li>GitHub</li>
                </ul>

                <!-- Collaboration Platforms -->
                <strong>Collaboration Platforms</strong>
                <ul class="skills-list">
                    <li>Microsoft Teams</li>
                    <li>GitHub</li>
                </ul>

                <!-- Documentation and Scheduling -->
                <strong>Documentation and Scheduling</strong>
                <ul class="skills-list">
                    <li>Calendly (Meeting Scheduling)</li>
                    <li>GitHub Wiki or README (Project Documentation)</li>
                </ul>
            </div>

            <!-- Other -->
            <div class="skills-category">
                <hr style="height:2px;border-width:0;color: var(--text-color);background-color:var(--text-color)">
                <h4 align="center">Other</h3>

                <!-- Machine Learning and AI Concepts -->
                <strong>Machine Learning and AI Concepts</strong>
                <ul>
                    <li>Understanding of Machine Learning Algorithms:
                        <ul>
                            <li>Linear Regression</li>
                            <li>Logistic Regression</li>
                            <li>Support Vector Machines (SVM)</li>
                            <li>Clustering Algorithms</li>
                        </ul>
                    </li>
                    <li>Deep Learning Models and Challenges:
                        <ul>
                            <li>Neural Networks (Fully Connected Networks)</li>
                            <li>Activation Functions</li>
                            <li>Backpropagation</li>
                            <li>Overfitting and Vanishing Gradients</li>
                        </ul>
                    </li>
                    <li>Model Evaluation Techniques:
                        <ul>
                            <li>Accuracy</li>
                            <li>Precision</li>
                            <li>Recall</li>
                            <li>F1 Score</li>
                        </ul>
                    </li>
                    <li>Advanced Deep Learning Architectures:
                        <ul>
                            <li>CNNs for Computer Vision</li>
                            <li>RNNs for Sequential Data</li>
                            <li>Transformers for NLP</li>
                            <li>GANs for Data Generation</li>
                            <li>DRL for Decision-Making Models</li>
                        </ul>
                    </li>
                </ul>

                <!-- Data Science and Analytics -->
                <strong>Data Science and Analytics</strong>
                <ul>
                    <li>Data Preprocessing and Feature Selection</li>
                    <li>Data Visualization and Storytelling</li>
                    <li>Big Data Handling with Python</li>
                    <li>Predictive and Prescriptive Modeling Techniques</li>
                </ul>

                <!-- Mathematics for Machine Learning -->
                <strong>Mathematics for Machine Learning</strong>
                <ul>
                    <li>Linear Algebra Concepts:
                        <ul>
                            <li>Matrices</li>
                            <li>Vectors</li>
                            <li>Eigenvalues and Eigenvectors</li>
                        </ul>
                    </li>
                    <li>Probability and Statistics:
                        <ul>
                            <li>Distributions</li>
                            <li>Expectation</li>
                            <li>Variance</li>
                        </ul>
                    </li>
                </ul>

                <!-- Natural Language Processing -->
                <strong>Natural Language Processing</strong>
                <ul>
                    <li>Text Preprocessing Techniques:
                        <ul>
                            <li>Tokenization</li>
                            <li>Stemming</li>
                            <li>Lemmatization</li>
                        </ul>
                    </li>
                    <li>Language Models:
                        <ul>
                            <li>BERT</li>
                            <li>GPT</li>
                            <li>Word2Vec</li>
                        </ul>
                    </li>
                    <li>NLP Applications:
                        <ul>
                            <li>Sentiment Analysis</li>
                            <li>Named Entity Recognition (NER)</li>
                            <li>Topic Modeling</li>
                        </ul>
                    </li>
                </ul>

                <!-- Computer Vision -->
                <strong>Computer Vision</strong>
                <ul>
                    <li>Image Processing Techniques</li>
                    <li>Object Detection and Tracking Algorithms</li>
                    <li>Image Segmentation</li>
                    <li>Movement Analysis Methods</li>
                </ul>

                <!-- Business Intelligence and Analytics -->
                <strong>Business Intelligence and Analytics</strong>
                <ul>
                    <li>Web Analytics Tools:
                        <ul>
                            <li>Google Analytics</li>
                        </ul>
                    </li>
                    <li>BI Tools:
                        <ul>
                            <li>Tableau</li>
                            <li>Power BI</li>
                        </ul>
                    </li>
                    <li>SEO Knowledge:
                        <ul>
                            <li>Keyword Research</li>
                            <li>On-page and Off-page SEO</li>
                            <li>Content Marketing</li>
                            <li>Link Building Strategies</li>
                        </ul>
                    </li>
                </ul>

                <!-- Software Quality Assurance -->
                <strong>Software Quality Assurance</strong>
                <ul>
                    <li>Software Testing Methodologies:
                        <ul>
                            <li>Unit Testing</li>
                            <li>Integration Testing</li>
                            <li>System Testing</li>
                        </ul>
                    </li>
                    <li>Good Software Design Principles:
                        <ul>
                            <li>SOLID Principles</li>
                        </ul>
                    </li>
                    <li>Quality Assurance Strategies</li>
                </ul>

                <!-- Ethics and Security -->
                <strong>Ethics and Security</strong>
                <ul>
                    <li>Data Security Measures</li>
                    <li>Legal Implications and Responsibilities</li>
                    <li>Ethical Frameworks in Data Mining and BI</li>
                </ul>

                <!-- Web Development Concepts -->
                <strong>Web Development Concepts</strong>
                <ul>
                    <li>MVC Architecture</li>
                    <li>RESTful API Development</li>
                    <li>Frontend and Backend Integration</li>
                </ul>

                <!-- Mobile App Development -->
                <strong>Mobile App Development</strong>
                <ul>
                    <li>Android Development with Java</li>
                    <li>UI Design</li>
                    <li>Google API Integration</li>
                </ul>

                <!-- Other Concepts -->
                <strong>Other Concepts</strong>
                <ul>
                    <li>Understanding of Big Data Architectures</li>
                    <li>Data Governance</li>
                    <li>Cloud Computing Basics</li>
                    <li>AI in Business Decision-Making</li>
                </ul>
            </div>
        </section>
    `,*/
    contact: `
        <section id="contact" class="content-section">
            <h2>Contact Me</h2>
            <!-- Web3Forms form -->
            <form id="contactForm" action="https://api.web3forms.com/submit" method="POST" class="contact-form card">
                <!-- Hidden fields for Web3Forms -->
                <input type="hidden" name="access_key" value="c79992af-9148-4bcd-aa1f-4376fe48eb64">
                <input type="hidden" name="_captcha" value="false">

                <!-- Input fields -->
                <input type="email" name="email" placeholder="Your Email" required>
                <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
                <button type="submit">Send Message</button>
            </form>

            <!-- Popup for form response -->
            <div id="formResponse" class="popup-box">
                <div id="responseMessage"></div>
            </div>

            <div class="schedule-meeting">
                <a href="https://calendly.com/hozefapatel1999" target="_blank">Schedule a Meeting</a>
            </div>
        </section>
    `,
};

// Project data
const projectData = {
    project1: {
        title: 'Enhancing Cybersecurity Resilience',
        image: 'assets/images/projects/p1/cybersecurity.jpg',
        shortDescription: 'Advanced Data Analysis and Risk Management using AI & ML for Cybersecurity.',
        description: `
            <h3>Introduction and Overview</h2>
            <p>This project was developed for <a class="my-link" href="https://technologyhelps.org/" target="_blank">Technology Helps</a>.</p>
            <p><strong>Project Objective:</strong> Develop a comprehensive risk assessment model to enhance cybersecurity measures for organizations.</p>
            <p><strong>Significance:</strong></p>
            <ul>
                <li>Address the growing need for robust cybersecurity in today's digital landscape.</li>
                <li>Provide actionable insights to help organizations mitigate potential security risks.</li>
            </ul>
            <p><strong>Key Components:</strong></p>
            <ul>
                <li>Data preprocessing and transformation.</li>
                <li>Machine learning model development and evaluation.</li>
                <li>Web portal implementation for user interaction.</li>
            </ul>

            <h3>What the Website Does?</h3>
            <p>This website serves as a comprehensive risk management tool, helping companies protect themselves from potential cybersecurity threats. It is part of a broader service offered by <strong>Technology Helps</strong>, which trains employees of various companies on cybersecurity measures, including identifying phishing links and handling malicious content.</p>
            <p><strong>How It Works:</strong></p>
            <ol>
                <li>Companies enroll their employees in training programs to educate them on cybersecurity threats.</li>
                <li>After the training, the service sends phishing and malicious links to employees as a test to assess their preparedness.</li>
                <li>The results of these tests, including training completion rates and phishing click rates, are fed into the web portal.</li>
                <li>The portal processes this data, evaluates the company's risk profile, and provides actionable recommendations to improve their cybersecurity measures.</li>
                <li>The web portal also maintains a history of reports and progress for each company, enabling them to track improvement over time.</li>
            </ol>
            <p><strong>Usage:</strong> This service and web portal are particularly beneficial for companies that aim to:</p>
            <ul>
                <li>Ensure compliance with cybersecurity regulations.</li>
                <li>Protect sensitive data from potential leaks or theft.</li>
                <li>Measure and improve employee awareness and training effectiveness over time.</li>
                <li>Receive actionable steps tailored to their specific vulnerabilities.</li>
            </ul>

            <h3>Dataset Overview</h2>
            <p><strong>Source and Description:</strong></p>
            <ul>
                <li><strong>Source:</strong> The dataset was a simulated collection created for educational purposes.</li>
                <li><strong>Description:</strong> It contains cybersecurity metrics for various companies, aimed at assessing risk levels and informing security measures.</li>
            </ul>
            <p><strong>Key Features:</strong></p>
            <ul>
                <li><strong>Asset Vulnerabilities:</strong> Categories: Critical, High Risk, Medium Risk, Low Risk. Measures the number and severity of vulnerabilities within a company's assets.</li>
                <li><strong>Training Completion Rates:</strong> Tracks the completion percentage of security training programs for company employees.</li>
                <li><strong>Phishing Simulations:</strong> Evaluates employee responses to simulated phishing attacks, measuring click rates and overall susceptibility.</li>
                <li><strong>Security Controls Audit Score:</strong> Measures the effectiveness of security controls in place, indicating the audit score compared to the maximum possible score.</li>
            </ul>
            <img loading="lazy" src="assets/images/projects/p1/data_sample.png" alt="Dataset Sample Screenshot">

            <h3>Data Preprocessing and Transformation</h2>
            <p><strong>Data Source:</strong> The dataset was obtained from a simulated collection of cybersecurity metrics for various companies.</p>
            <ol>
                <li><strong>Loading and Inspecting Data:</strong> Utilized pandas to load the Excel dataset and inspected the dataset for structure and anomalies.</li>
                <li><strong>Data Transposition and Cleaning:</strong> Transposed the dataset to align features and records, corrected column names, and handled missing values.</li>
                <li><strong>Feature Standardization:</strong> Split and standardized training and phishing data, standardized date formats and numerical fields.</li>
                <li><strong>Security Controls Audit:</strong> Split audit scores into separate fields for detailed analysis.</li>
            </ol>
            <p><strong>Outcome:</strong> Clean and structured data ready for model training and evaluation.</p>

            <h3>Risk Score Calculation</h2>
            <p>The risk score calculation is an essential part of assessing a company's cybersecurity risk profile. It evaluates various factors, including training completion rates, phishing click rates, vulnerability counts, and audit scores, to determine the overall risk score and corresponding risk level.</p>
            <p>Note: We have set these thresholds, defined according to the industry standards and can be changed to meet the different needs.</p>
            <img loading="lazy" src="assets/images/projects/p1/risk_score_calc.png" alt="Risk Score Calculation" style="display: block; margin: 0 auto; width: 70%; max-width: 100%; height: auto;"><br>
            <img loading="lazy" src="assets/images/projects/p1/flowchart.svg" alt="Risk Score Calculation Process In-Depth">

            <h3>Model Selection and Training</h2>
            <p><strong>Objective:</strong> To develop a predictive model for assessing cybersecurity risk based on the processed features.</p>
            <p><strong>Selected Models:</strong></p>
            <ul>
                <li>Linear Regression</li>
                <li>Decision Tree Regressor</li>
                <li>Random Forest Regressor</li>
                <li>Gradient Boosting Regressor</li>
                <li>XGBoost Regressor</li>
                <li>Support Vector Regressor</li>
                <li>Elastic Net Regression</li>
            </ul>
            <p><strong>Evaluation Metrics:</strong> Models were evaluated using Mean Squared Error (MSE) and R² (coefficient of determination) to measure prediction accuracy and variance explanation.</p>
            <img loading="lazy" src="assets/images/projects/p1/comparision_table.png" alt="Model Comparison Table" style="display: block; margin: 0 auto; width: 80%; max-width: 100%; height: auto;"><br>
            <img loading="lazy" src="assets/images/projects/p1/comparision_chart.png" alt="Model Comparison Chart" style="display: block; margin: 0 auto; width: 80%; max-width: 100%; height: auto;">

            <h3>Web Portal Overview</h2>
            <p>It’s a risk assessment tool that provides actionable recommendations and insights.</p>
            <ul>
                <li><strong>Single Risk Assessment:</strong> Allows users to <b>input data</b> for individual companies and receive risk evaluations instantly. Displays a risk score and level, along with actionable recommendations.</li>
                <li><strong>Batch Risk Assessment:</strong> Enables <b>uploading of Excel files</b> for assessing multiple companies simultaneously. Provides a detailed report for each company, including risk scores and <b>actionable recommendations</b>.</li>
            </ul>

            <h3>Technical Implementation</h2>
            <p><strong>Architecture Overview:</strong></p>
            <ul>
                <li><strong>Client-Server Model:</strong> The web portal uses a client-server architecture where the client interface is built using HTML, CSS, and JavaScript, and the server-side logic is handled by Flask.</li>
                <li><strong>MVC Pattern:</strong> The portal follows the Model-View-Controller (MVC) design pattern, separating the user interface, business logic, and data access layers for better maintainability.</li>
            </ul>
            <p><strong>Front-end:</strong> HTML/CSS used for structuring and styling the web pages, JavaScript & Plotly enhance interactivity and visualization.</p>
            <p><strong>Back-end:</strong> Flask Framework handles HTTP requests, user sessions, and routes, with Python for business logic and data processing.</p>
            <p><strong>Database:</strong> SQLite is used for storage, with SQLAlchemy for database interactions.</p>

            <h3>Actionable Recommendations</h2>
            <p>Using <a class="my-link" href="https://huggingface.co/google/gemma-2-2b-it">GEMMA-2-2b-it</a>, we provide customized security solutions based on each company's specific vulnerabilities and risk profile.</p>
            <img loading="lazy" src="assets/images/projects/p1/gemma.png" alt="GEMMA Model">

            <h3>Future Improvements</h2>
            <ul>
                <li>Enhance the model by incorporating more diverse datasets.</li>
                <li>Collect data from a wider range of industries to generalize the model's applicability.</li>
                <li>Continuously update the dataset with the latest security trends and incidents.</li>
                <li>Fine-tuning of LLM to provide more precise actionable recommendations that meet our domain needs.</li>
            </ul>

            <h3>Web Portal Screenshots</h2>
            <p>Home Page (Without Login)</p>
            <img loading="lazy" src="assets/images/projects/p1/ss/Home_WithoutLogin.png" alt="Home Page (Without Login)" style="display: block; margin: 0 auto; width: 80%; max-width: 100%; height: auto;">
            <p>Home Page</p>
            <img loading="lazy" src="assets/images/projects/p1/ss/Home.png" alt="Home Page" style="display: block; margin: 0 auto; width: 80%; max-width: 100%; height: auto;">
            <p>About Us Page</p>
            <img loading="lazy" src="assets/images/projects/p1/ss/About_Us.png" alt="About Us Page" style="display: block; margin: 0 auto; width: 80%; max-width: 100%; height: auto;">
            <p>History Page</p>
            <img loading="lazy" src="assets/images/projects/p1/ss/History.png" alt="History Page" style="display: block; margin: 0 auto; width: 80%; max-width: 100%; height: auto;">
            <p>Admin Dashboard Page</p>
            <img loading="lazy" src="assets/images/projects/p1/ss/Admin_Dashboard.png" alt="Admin Dashboard Page" style="display: block; margin: 0 auto; width: 80%; max-width: 100%; height: auto;">
            <p>Risk Assessment Page (1)</p>
            <img loading="lazy" src="assets/images/projects/p1/ss/Risk_Assessment1.png" alt="Risk Assessment Page (1)" style="display: block; margin: 0 auto; width: 80%; max-width: 100%; height: auto;">
            <p>Risk Assessment Page (2)</p>
            <img loading="lazy" src="assets/images/projects/p1/ss/Risk_Assessment2.png" alt="Risk Assessment Page (2)" style="display: block; margin: 0 auto; width: 80%; max-width: 100%; height: auto;">
            <p>Result Page (1)</p>
            <img loading="lazy" src="assets/images/projects/p1/ss/Result1.png" alt="Result Page (1)" style="display: block; margin: 0 auto; width: 80%; max-width: 100%; height: auto;">
            <p>Result Page (2)</p>
            <img loading="lazy" src="assets/images/projects/p1/ss/Result2.png" alt="Result Page (2)" style="display: block; margin: 0 auto; width: 80%; max-width: 100%; height: auto;">
            <p>Result Page (3)</p>
            <img loading="lazy" src="assets/images/projects/p1/ss/Result3.png" alt="Result Page (3)" style="display: block; margin: 0 auto; width: 80%; max-width: 100%; height: auto;">
        `,
        technologies: ['Python', 'Flask', 'SQLAlchemy', 'JavaScript', 'HTML', 'CSS', 'Plotly'],
        liveLink: 'https://your-live-link.com',
        repoLink: 'https://your-repository-link.com',
        categories: ['AI/ML', 'Data Analytics'],
    },
    project2: {
        title: 'Sentiment Analysis of Yelp Restaurant Reviews',
        image: 'assets/images/projects/p2/sentiment_analysis.png',
        shortDescription: 'Comparing LSTM and DistilBERT models for analyzing customer reviews on Yelp.',
        description: `
        <h3>Objective</h3>
        <p>To perform sentiment analysis on Yelp restaurant reviews using LSTM and DistilBERT models.</p>

        <h3>Significance</h3>
        <p>Understanding customer sentiment helps businesses improve their services and tailor marketing strategies.</p>

        <h3>Dataset Overview</h3>
        <p>Yelp Reviews: Collection of restaurant reviews with ratings from 1 to 5 stars.</p>
        <img loading="lazy" src="assets/images/projects/p2/data_distribution.png" alt="Data Distribution" style="display: block; margin: 0 auto; width: 80%; max-width: 100%; height: auto;">
        <p>Sentiment Mapping:</p>
        <ul>
            <li>4-5 Stars: Positive</li>
            <li>3 Stars: Neutral</li>
            <li>1-2 Stars: Negative</li>
        </ul>
        <h3>Visualizations</h3>
        <img loading="lazy" src="assets/images/projects/p2/review_length.png" alt="Review Lengths" style="display: block; margin: 0 auto; width: 80%; max-width: 100%; height: auto;"><br>
        <img loading="lazy" src="assets/images/projects/p2/review_stars.png" alt="Review Stars" style="display: block; margin: 0 auto; width: 80%; max-width: 100%; height: auto;"><br>
        <img loading="lazy" src="assets/images/projects/p2/compound_score.png" alt="Compound Score" style="display: block; margin: 0 auto; width: 80%; max-width: 100%; height: auto;">

        <h3>Data Preprocessing</h3>
        <img loading="lazy" src="assets/images/projects/p2/word_cloud.png" alt="Word Cloud" style="display: block; margin: 0 auto; width: 70%; max-width: 100%; height: auto;">
        <p>Text Cleaning: HTML tags, punctuation removed, text converted to lowercase.</p>
        <p>Train-Test Split for LSTM and DistilBERT: 80% training and 20% testing split.</p>

        <h3>Sentiment Intensity Analyzer</h3>
        <img loading="lazy" src="assets/images/projects/p2/sentiment_intensity_analyzer.png" alt="Sentiment Intensity Analyzer">

        <h3>Model Architectures</h3>
        <p><strong>LSTM:</strong></p>
        <ul>
            <li>Embedding Layer: 100-dimensional embeddings</li>
            <li>First LSTM Layer: 128 units with return_sequences=True</li>
            <li>Second LSTM Layer: 64 units</li>
            <li>Dense Layer: 64 units with ReLU activation</li>
            <li>Dropout Layer: 50% dropout rate</li>
            <li>Output Layer: 1 unit with sigmoid activation (binary classification)</li>
        </ul>
        <p><strong>DistilBERT:</strong></p>
        <ul>
            <li>Tokenizer: DistilBertTokenizer from distilbert-base-uncased</li>
            <li>Maximum sequence length: 200</li>
            <li>Custom layer DistilBERTClassifier integrates TFDistilBertModel</li>
            <li>Batch Size: 32</li>
        </ul>

        <h3>Model Performance</h3>
        <img loading="lazy" src="assets/images/projects/p2/comparison_performance.jpg" alt="Model Performance Comparison">

        <p><strong>LSTM:</strong></p>
        <ul>
            <li>Accuracy: 83%</li>
            <li>F1 Score: 89.64%</li>
        </ul>
        <p><strong>DistilBERT:</strong></p>
        <ul>
            <li>Accuracy: 64%</li>
            <li>F1 Score: 49%</li>
        </ul>
        
        <h3>Test Result</h3>
        <img loading="lazy" src="assets/images/projects/p2/test_results.png" alt="Test Result">

        <a class="my-link" href="https://github.com/hoz-efa/Sentiment-Analysis-on-Yelp-Restaurant-Reviews" target="_blank">View Repository</a>
        `,
        technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'NLTK', 'TensorFlow', 'Keras', 'Scikit-learn'],
        liveLink: '#',
        repoLink: '#',
        categories: ['AI/ML', 'Data Analytics'],
    },
    project3: {
        title: 'Real-Time Stock Recommendation System',
        image: 'assets/images/projects/p3/stock_recommendation.jpg',
        shortDescription: 'Integrates sentiment analysis and machine learning to provide real-time stock buying, holding, or selling recommendations.',
        description: `
            <h3>Objective</h3>
            <p>To develop a system that provides buy, hold, or sell recommendations for stocks based on an analysis of financial news articles, company financial reports, and historical stock price data. The system leverages Natural Language Processing (NLP) for sentiment analysis and Long Short-Term Memory (LSTM) networks for time series prediction.</p>
    
            <h3>Significance</h3>
            <p>Helps traders make informed decisions by providing timely buy or sell recommendations based on historical trends and current market data.</p>
    
            <h3>Approach</h3>
            <p>Models trained on historical stock data and Twitter sentiment predict using stock movement averages, then refine recommendations based on the current prices of specific stocks.</p>
            
            <h3>Dataset Overview</h3>
            <p>Data includes financial news articles, company financial reports, and historical stock data. Sentiment analysis is performed on news articles to gauge market sentiment, which is then integrated with financial ratios and stock price data.</p>
            
            <h3>Methodology</h3>
            <ol>
                <li>Data Collection: Utilize APIs to fetch financial news articles and historical stock data from sources like NewsAPI and Yahoo Finance.</li>
                <li>Data Preprocessing: Text normalization, stop-word removal, and tokenization of news articles. Preprocessing of stock data to extract key financial metrics.</li>
                <li>Feature Engineering: Convert text data into numerical features using TF-IDF or word embeddings. Extract and merge financial ratios with sentiment scores and stock data.</li>
                <li>Model Training: Use LSTM networks for time series prediction of stock price movements based on the processed data.</li>
                <li>Recommendation Generation: Define logic to generate buy, hold, or sell signals based on model predictions.</li>
            </ol>
            
            <h3>Performance Metrics</h3>
            <p>Model performance analyzed using accuracy, precision, recall, F1 score, and ROC curves. Various machine learning models compared including XGBoost and LightGBM.</p>
            
            <h3>Visualizations</h3>
            <img loading="lazy" src="assets/images/projects/p3/roc_curve.png" alt="ROC Curve">
            <img loading="lazy" src="assets/images/projects/p3/model_comparison.png" alt="Model Comparison Chart">
            <img loading="lazy" src="assets/images/projects/p3/test_result.jpg" alt="Predictive Results">
            
            <h3>Challenges and Solutions</h3>
            <p>Addressing issues of data quality by ensuring high-quality and relevant data sources. Improving model accuracy by experimenting with different model architectures and hyperparameters.</p>
            
            <h3>Conclusion</h3>
            <p>The project develops a robust investment strategy suggestion system that automates the analysis process, providing actionable insights and assisting investors in enhancing their investment outcomes.</p>

            <a class="my-link" href="https://github.com/hoz-efa/Real-Time-Stock-Recommendation-System" target="_blank">View Repository</a>
        `,
        technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'NLTK', 'TensorFlow', 'Keras', 'TextBlob', 'yfinance', 'Requests', 'BeautifulSoup', 'XGBoost', 'LightGBM'],
        liveLink: 'https://your-live-link.com',
        repoLink: 'https://github.com/hoz-efa/Real-Time-Stock-Recommendation-System',
        categories: ['AI/ML', 'Data Analytics'],
    },

    project4: {
        title: 'News Sentiment Analysis with Spark',
        image: 'assets/images/projects/p4/news-sentiment.png',
        shortDescription: 'Exploring media sentiment through advanced data streaming and processing with Apache Spark, Zookeeper, and Kafka.',
        description: 
            `<h3>Introduction and Overview</h3>
            <p>Welcome to my project on sentiment analysis of news articles using Apache Spark. This project applies advanced data processing techniques and machine learning to determine underlying sentiments in news content, showcasing the powerful capabilities of big data technologies.</p>
    
            <h3>Project Workflow</h3>
            <p>The project integrates Apache Zookeeper and Kafka for data streaming and management, with Apache Spark handling the heavy lifting of data processing and machine learning for sentiment classification. Here's a breakdown of the workflow:</p>
            <ol>
                <li><strong>Cluster Setup:</strong> Initially, a cluster is set up following specific guidelines to support the required technologies.</li>
                <li><strong>Zookeeper and Kafka Configuration:</strong> Zookeeper is installed and configured to manage Kafka, which streams the data necessary for processing.</li>
                <li><strong>Data Streaming:</strong> Kafka efficiently handles data streaming between the components, ensuring real-time data flow.</li>
                <li><strong>Spark Processing:</strong> Apache Spark processes the streamed data, applying machine learning algorithms to classify the sentiment of each article.</li>
            </ol>
    
            <h3>Implementation Details</h3>
            <p>Each component plays a crucial role:</p>
            <ul>
                <li><strong>Zookeeper:</strong> Manages the Kafka cluster, ensuring all nodes in the cluster are synchronized.</li>
                <li><strong>Kafka:</strong> Handles real-time data streaming from various sources, feeding into Spark for analysis.</li>
                <li><strong>Spark:</strong> Uses machine learning libraries to analyze and classify the data received from Kafka.</li>
            </ul>
    
            <h3>Machine Learning Process</h3>
            <p>The sentiment analysis model is built using Spark MLlib, where the data is tokenized, normalized, and vectorized before being fed into classification algorithms such as Logistic Regression or Random Forests.</p>
    
            <h3>Outcome and Capabilities</h3>
            <p>The final system is capable of processing large volumes of data in real time, providing sentiment analysis that can be crucial for understanding public opinion and media bias.</p>
    
            <h3>Further Exploration</h3>
            <p>For more detailed insights and access to the source code, visit the GitHub repository.</p>
            <a class="my-link" href="https://github.com/hoz-efa/News-Sentiment-Analysis-with-Spark" target="_blank">View Repository</a>
            <p>This project not only illustrates the application of big data processing with Apache Spark but also serves as a practical reference for those looking to delve into the field of big data analytics.</p>`,
        technologies: ['Apache Spark', 'Zookeeper', 'Kafka', 'Machine Learning'],
        liveLink: 'https://your-live-link.com',
        repoLink: 'https://github.com/hoz-efa/News-Sentiment-Analysis-with-Spark',
        categories: ['Data Analytics', 'Big Data'],
    },

    project5: {
        title: 'Telegram Google Drive Bot',
        image: 'assets/images/projects/p5/telegram-gdrive-bot.png',
        shortDescription: 'Integrate and manage Google Drive through Telegram with advanced file management capabilities using the Google Drive API and Telegram Bot API.',
        description:
            `<h3>Introduction</h3>
            <p>The Telegram Google Drive Bot is a powerful tool designed to facilitate interaction with Google Drive directly from Telegram. It enables users to search for files across multiple Team Drives, clone files and folders, and manage user permissions seamlessly. By leveraging the Google Drive API and the Telegram Bot API, this bot provides a convenient interface for managing Google Drive resources without leaving the Telegram app.</p>

            <hr>

            <h3>Project Structure</h3>
            <h4>Main Modules</h4>
            <ul>
                <li><strong>__main__.py:</strong> The entry point of the bot application. It initializes the bot, registers command handlers, and starts the polling loop to listen for incoming messages.</li>
                <li><strong>authorize.py:</strong> Manages user and chat authorization. It defines commands to authorize or unauthorize users and chats, ensuring that only permitted entities can interact with the bot.</li>
                <li><strong>clone.py</strong> and <strong>copy.py:</strong> Handle the cloning of files and folders from one Google Drive location to another. The clone.py script clones to the primary clone folder, while copy.py clones to an alternate destination.</li>
                <li><strong>list.py:</strong> Implements the search functionality, allowing users to search for files and folders across all connected Team Drives.</li>
            </ul>

            <h4>Helper Modules</h4>
            <ul>
                <li><strong>gdriveTools.py:</strong> Contains the GoogleDriveHelper class, which encapsulates all interactions with the Google Drive API, including authorization, file copying, folder creation, and searching.</li>
                <li><strong>bot_commands.py:</strong> Defines all the bot commands used throughout the application as attributes of the _BotCommands class. This centralization simplifies command management.</li>
                <li><strong>button_builder.py:</strong> Provides utilities for building inline keyboard buttons in Telegram messages, enhancing user interaction with the bot.</li>
                <li><strong>filters.py:</strong> Contains custom filters based on telegram.ext.BaseFilter to manage access control. Filters include owner-only commands, authorized user checks, and authorized chat checks.</li>
                <li><strong>message_utils.py:</strong> Houses functions for sending and editing messages, handling logs, sending files, and other message-related utilities.</li>
            </ul>

            <h4>Configuration Files</h4>
            <ul>
                <li><strong>config.env:</strong> Stores environment variables required for the bot's operation, such as the bot token, owner ID, clone folder IDs, and other optional settings like index URLs and authorization chats.</li>
                <li><strong>credentials.json:</strong> Contains Google API client credentials necessary for OAuth 2.0 authentication.</li>
                <li><strong>token.json:</strong> Stores the Google Drive API authentication token, including the access and refresh tokens.</li>
            </ul>

            <h4>Deployment Files</h4>
            <ul>
                <li><strong>Dockerfile:</strong> Defines the Docker image for the application, specifying the base image, working directory, installed packages, and commands to run.</li>
                <li><strong>heroku.yml</strong> and <strong>Procfile:</strong> Configuration files for deploying the bot on Heroku, detailing the build process and the command to execute upon deployment.</li>
                <li><strong>requirements.txt:</strong> Lists all Python dependencies required by the project, ensuring a consistent environment across different deployments.</li>
                <li><strong>start.sh:</strong> A shell script to initiate the bot by running the main module.</li>
            </ul>

            <hr>

            <h3>Core Functionality</h3>
            <h4>User Authorization</h4>
            <p>The bot restricts access to authorized users and chats to prevent unauthorized usage:</p>
            <ul>
                <li><strong>Authorization Commands:</strong>
                    <ul>
                        <li><strong>/auth:</strong> Authorizes a user or chat to use the bot. If used in reply to a message, it authorizes the user who sent that message.</li>
                        <li><strong>/unauth:</strong> Revokes authorization from a user or chat.</li>
                        <li><strong>/users:</strong> Lists all currently authorized users and chats.</li>
                    </ul>
                </li>
                <li><strong>Access Control:</strong> The bot uses custom filters to check whether a user or chat is authorized before processing commands. Only the bot owner can authorize or unauthorize users and chats.</li>
            </ul>

            <h4>Searching Files</h4>
            <p>Users can search for files and folders across all connected Team Drives:</p>
            <ul>
                <li><strong>Command:</strong> <strong>/search <query></strong></li>
                <li><strong>Functionality:</strong>
                    <ul>
                        <li>The bot parses the search query and constructs a Google Drive API query.</li>
                        <li>It searches across all Team Drives the bot has access to.</li>
                        <li>Results are formatted and presented to the user, with options to view or clone the files.</li>
                    </ul>
                </li>
            </ul>

            <h4>Cloning Files and Folders</h4>
            <p>The bot allows cloning of files and folders from shared links:</p>
            <ul>
                <li><strong>Commands:</strong>
                    <ul>
                        <li><strong>/xerox <Google Drive Link>:</strong> Clones the specified file or folder to the primary clone folder defined in the configuration.</li>
                        <li><strong>/copy <Google Drive Link>:</strong> Clones to an alternate destination.</li>
                    </ul>
                </li>
                <li><strong>Functionality:</strong>
                    <ul>
                        <li>The bot extracts the file or folder ID from the provided link.</li>
                        <li>It uses the Google Drive API to copy files or recursively clone folders.</li>
                        <li>If configured, the bot can set permissions to make the cloned content public.</li>
                    </ul>
                </li>
            </ul>

            <h4>Logging and Updates</h4>
            <ul>
                <li><strong>/log:</strong> Retrieves the bot's log file, which includes detailed information about operations and errors, aiding in debugging.</li>
                <li><strong>/update:</strong> Refreshes the list of Team Drives connected to the bot, ensuring that searches include any new drives added.</li>
            </ul>

            <hr>

            <h3>Technical Details</h3>
            <h4>Google Drive API Integration</h4>
            <p>Uses OAuth 2.0 for authentication with Google APIs. Methods include copying files, cloning folders, creating directories, and executing search queries across all Team Drives. Implements retries with exponential backoff to handle transient errors.</p>

            <h4>Telegram Bot API Integration</h4>
            <p>Uses the python-telegram-bot library for interacting with the Telegram Bot API. Command handlers are registered for each command, and messaging utilities are provided to handle communications.</p>

            <h4>Asynchronous Execution</h4>
            <p>Concurrency is handled using the @run_async decorator and custom threading to prevent blocking of the main thread during long-running operations.</p>

            <h4>Deployment Configuration</h4>
            <p>Deployment is managed using Docker and Heroku, with configuration files detailing the build process and commands for execution.</p>

            <hr>

            <h3>Security Considerations</h3>
            <p>Ensures that sensitive data is securely stored and that access is strictly controlled through authorization commands and custom filters. Permissions for cloned files can be managed to prevent unintended data exposure.</p>

            <hr>

            <h4>Usage Instructions</h4>
            <p>Details on starting the bot, searching for files, cloning files and folders, managing authorizations, and handling logs and updates.</p>

            <hr>

            <h3>Extensibility and Customization</h3>
            <p>Describes how new commands can be added, functionality can be extended, and access control and deployment configurations can be modified.</p>

            <hr>

            <h3>Technical Challenges and Solutions</h3>
            <p>Discusses how the project handles API rate limits, manages long-running operations, and ensures security.</p>

            <hr>

            <h3>Best Practices</h3>
            <p>Emphasizes modularity, error handling, logging, documentation, and security as key aspects of the project's design.</p>

            <hr>

            <h3>Screenshots</h3>

            <p>Discover Any Files/Folders in Your Google Drive</p>
            <img loading="lazy" src="assets/images/projects/p5/ss/s1.jpg" alt="Screenshot 1" style="display: block; margin: 0 auto; width: 60%; max-width: 100%; height: auto;">
            <p>Manage Files / Folders of Drive and Team Drives</p>
            <img loading="lazy" src="assets/images/projects/p5/ss/s2.jpg" alt="Screenshot 2" style="display: block; margin: 0 auto; width: 60%; max-width: 100%; height: auto;">
            <p>Get Drive and Index links in search results to download directly</p>
            <img loading="lazy" src="assets/images/projects/p5/ss/s3.jpg" alt="Screenshot 3" style="display: block; margin: 0 auto; width: 60%; max-width: 100%; height: auto;">
            <p>Clone / Update file / folders from other team drives to your drive or team drive.</p>
            <img loading="lazy" src="assets/images/projects/p5/ss/s4.jpg" alt="Screenshot 4" style="display: block; margin: 0 auto; width: 60%; max-width: 100%; height: auto;">

            <hr>

            <h3>Conclusion</h3>
            <p>The Telegram Google Drive Bot is a feature-rich application that integrates Google Drive operations into Telegram, enhancing productivity and ensuring a secure and reliable user experience.</p>`,
        technologies: ['Python', 'Telegram Bot API', 'Python-Telegram-Bot Wrapper', 'Google Drive API', 'Docker', 'Heroku'],
        liveLink: 'https://your-live-link.com',
        repoLink: 'https://github.com/your-github/Telegram-Google-Drive-Bot',
        categories: ['Automation'],
    },

    project6: {  
        title: 'Insta Comment Bot',  
        image: 'assets/images/projects/p6/Insta-Comment-Bot.png',  
        shortDescription: 'An automated Python tool to post comments on Instagram posts from multiple accounts using Selenium, with hashtag scraping and human-like interaction to avoid detection.',
        description:`<h3>Introduction</h3>  
                    <p>The Insta Comment Bot is an automated tool designed to enhance marketing efforts on Instagram. It automates the process of commenting on posts from specific hashtags using multiple accounts, mimicking human behavior to avoid detection and improve engagement metrics. The bot is a Python-based solution leveraging Selenium for browser automation and includes robust error handling and activity logging for seamless operations.</p>  

                    <hr>  

                    <h3>Core Features</h3>  
                    <ul>  
                        <li><strong>Multi-Account Support:</strong> Automates login and activity for multiple accounts.</li>  
                        <li><strong>Hashtag Scraping:</strong> Targets posts from specific hashtags for maximum reach.</li>  
                        <li><strong>Human-Like Interaction:</strong> Randomized delays and behaviors to mimic human activity.</li>  
                        <li><strong>Headless Mode:</strong> Operates in the background without displaying browser windows.</li>  
                        <li><strong>Error Handling:</strong> Gracefully handles login failures, restrictions, and exceptions.</li>  
                        <li><strong>Logging:</strong> Maintains a log of activities, including posted comments and account statuses.</li>  
                    </ul>  

                    <hr>  

                    <h3>Setup and Configuration</h3>  
                    <ol>  
                        <li>Clone the repository and install dependencies listed in the <code>requirements.txt</code>.</li>  
                        <li>Update settings with Instagram accounts, hashtags, and comments.</li>  
                        <li>Install ChromeDriver and place it in the appropriate directory for Selenium to function correctly.</li>  
                    </ol>  

                    <h3>Use Case</h3>  
                    <p>This bot is particularly useful for digital marketing and social media management. By automating comments on targeted posts, it helps businesses and influencers:  
                    <ul>  
                        <li>Increase engagement rates by interacting with potential followers.</li>  
                        <li>Promote brand awareness by targeting relevant hashtags.</li>  
                        <li>Save time and resources by automating repetitive tasks.</li>  
                    </ul>  
                    </p>  

                    <hr>  

                    <h3>Planned Enhancements</h3>  
                    <ul>  
                        <li>Emoji support for better comment customization.</li>  
                        <li>Integration with Telegram for activity notifications.</li>  
                        <li>Graphical User Interface (GUI) for easier bot management.</li>  
                    </ul>  

                    <hr>  

                    <h3>Security Considerations</h3>  
                    <p>The bot implements several measures to avoid Instagram's bot detection algorithms, such as randomized delays and activity patterns. However, users are advised to exercise caution as bot usage violates Instagram's terms of service and may lead to account restrictions.</p>  

                    <hr>

                    <h3>Repository Status</h3>  
                    <p><strong>Note:</strong> The repository for this project has not been made public. The decision was taken to ensure compliance with Instagram's terms of service, as this bot's automation capabilities might violate those terms. Making the repository public could lead to misuse or exploitation of the tool in ways that harm Instagram's ecosystem or violate ethical practices. This project is available only for demonstration and educational purposes upon request.</p>  
                    <img loading="lazy" src="assets/images/projects/p6/repoSS.png" alt="Repo Screenshot" style="display: block; margin: 0 auto; width: 100%; max-width: 100%; height: auto;">
                    <hr>

                    <h3>Conclusion</h3>  
                    <p>The Insta Comment Bot provides a scalable and efficient way to boost marketing efforts on Instagram, making it an invaluable tool for businesses and influencers aiming to improve their online presence.</p>`,  

        technologies: ['Python', 'Selenium', 'Instagram API', 'ChromeDriver'],  
        liveLink: '',  
        repoLink: 'https://github.com/your-github/Insta-Comment-Bot',
        categories: ['Automation', 'Mini Projects'],
    },
};

// Certifications Data
const certificationsData = {
    cert1: {
        title: 'Google AI Essentials',
        image: 'assets/images/certifications/Google AI Essentials - Certificate.jpg',
        credentialId: 'KIWTQGQAJ6BB',
        credentialUrl: 'https://www.coursera.org/account/accomplishments/records/KIWTQGQAJ6BB',
        description: 'Earned the Google AI Essentials certificate, which covers foundational concepts in artificial intelligence, including machine learning, neural networks, and practical applications of AI in real-world scenarios. Gained hands-on experience with AI tools and frameworks, enhancing my ability to integrate AI solutions into various projects.',
    },
    cert2: {
        title: 'Google Data Analytics',
        image: 'assets/images/certifications/Google Data Analytics - Certificate.jpg',
        credentialId: '8YU8OHP4P7ZQ',
        credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/8YU8OHP4P7ZQ',
        description: 'Achieved the Google Data Analytics certificate, a comprehensive program that provided in-depth knowledge of data preparation, processing, analysis, and visualization. Developed proficiency in tools like R programming, SQL, Tableau, and spreadsheets, while gaining hands-on experience in creating dashboards and crafting actionable insights. This certification strengthens my skills in making data-driven decisions and presenting clear, impactful visualizations.',
    },
    cert3: {
        title: 'Google IT Automation with Python',
        image: 'assets/images/certifications/Google IT Automation with Python - Certificate.jpg',
        credentialId: 'ICDWE8E20ATW',
        credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/ICDWE8E20ATW',
        description: 'This certificate, developed by Google, equips me with essential IT automation skills using Python, Git, and cloud technologies. I learned to automate tasks in IT support and systems administration, troubleshoot complex problems, and apply configuration management at scale. The program strengthened my ability to use Git and GitHub, debug issues, and automate processes to streamline IT operations, preparing me for advanced roles like IT Support Specialist or Junior Systems Administrator.',
    },
    cert4: {
        title: 'Google Cybersecurity',
        image: 'assets/images/certifications/Google Cybersecurity - Certificate.jpg',
        credentialId: 'TR3CS910BTQ7',
        credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/TR3CS910BTQ7',
        description: 'Earned the Google Cybersecurity certificate, which covers foundational concepts in cybersecurity, including managing security risks, detecting and mitigating threats, and automating tasks using Python. Gained hands-on experience with tools like Linux, SQL, and SIEM, enhancing my ability to protect networks, devices, and data in real-world scenarios.',
    },
};

// Awards and Recognition
const AwardsandRecognitionData = {
    ar1: {
        title: '11th NSS 2019 Oral',
        image: 'assets/images/awards and recognition/11thNSS2019-oral.jpg',
        description: 'Oral presentation certification from the 11th National Students\' Symposium.',
    },
    ar2: {
        title: '11th NSS 2019 Poster',
        image: 'assets/images/awards and recognition/11thNSS2019-poster.jpg',
        description: 'Poster presentation certification from the 11th National Students\' Symposium.',
    },
    ar3: {
        title: 'Hackathon 2022',
        image: 'assets/images/awards and recognition/Hackathon2022.jpg',
        description: 'Awarded for outstanding innovation at the 2022 Tech Hackathon.',
    },
    ar4: {
        title: 'PB EH Certification',
        image: 'assets/images/awards and recognition/PB-EH.jpg',
        description: 'Certification in Ethical Hacking from PB.',
    },
    ar5: {
        title: 'PB IOT Certification',
        image: 'assets/images/awards and recognition/PB-IOT.jpg',
        description: 'Certification in Internet of Things from PB.',
    },
    ar6: {
        title: 'SSIP 2019',
        image: 'assets/images/awards and recognition/SSIP-2019.jpg',
        description: 'Student Startup and Innovation Policy certification from 2019.',
    },
};

// Function to open project modal
function openProjectModal(projectId) {
    const projectDetails = projectData[projectId];
    if (projectDetails) {
        document.getElementById('modal-content').innerHTML = `
            <h2>${projectDetails.title}</h2>

            <div class="image-container">
            <!-- Image with gradient -->
            <div class="rounded-image-wrapper">
                <img loading="lazy" src="${projectDetails.image}" alt="${projectDetails.title}" class="rounded-image">
                <div class="gradient-overlay"></div>
            </div>
            
            <!-- Scroll indicator -->
            <div class="scroll-indicator">
                <div class="chevron-container">
                <div class="chevron"></div>
                <div class="chevron"></div>
                <div class="chevron"></div>
                </div>
                <span class="scroll-text">SCROLL DOWN</span>
            </div>
            </div>

            <p>${projectDetails.description}</p>
            <h3>Technologies Used:</h3>
            <ul>
                ${projectDetails.technologies.map((tech) => `<li>${tech}</li>`).join('')}
            </ul><!-- 
            <a href="${projectDetails.liveLink}" target="_blank">View Live</a>
            <a href="${projectDetails.repoLink}" target="_blank">View Repository</a> -->
        `;
        document.getElementById('project-modal').classList.add('active');
        document.getElementById('modal-overlay').classList.add('active');
        document.body.classList.add('modal-active');

        // Reset scroll position after the modal is rendered
        setTimeout(() => {
            const modalContentElement = document.querySelector('.modal-content');
            if (modalContentElement) {
                modalContentElement.scrollTop = 0;
            }
        }, 0);
    }
}

// Function to open Awards and Recognition modal
function openAwardsandRecognitionModal(arId) {
    const arDetails = AwardsandRecognitionData[arId];
    if (arDetails) {
        document.getElementById('modal-content').innerHTML = `
            <h2>${arDetails.title}</h2>
            <img src="${arDetails.image}" alt="${arDetails.title}" style="display: block; margin: 0 auto; width: 80%; max-width: 100%; height: auto;">
            <p>${arDetails.description}</p>
        `;
        document.getElementById('project-modal').classList.add('active');
        document.getElementById('modal-overlay').classList.add('active');
        document.body.classList.add('modal-active');

        // Reset scroll position after the modal is rendered
        setTimeout(() => {
            const modalContentElement = document.querySelector('.modal-content');
            if (modalContentElement) {
                modalContentElement.scrollTop = 0;
            }
        }, 0);
    }
}

// Function to close project or Awards and Recognition modal
function closeProjectModal() {
    document.getElementById('project-modal').classList.remove('active');
    document.getElementById('modal-overlay').classList.remove('active');
    document.body.classList.remove('modal-active');
}

// Function to open Certification modal
function openCertificationModal(certId) {
    const certDetails = certificationsData[certId];
    if (certDetails) {
        document.getElementById('modal-content').innerHTML = `
            <h2>${certDetails.title}</h2>
            <img src="${certDetails.image}" alt="${certDetails.title}" style="display: block; margin: 0 auto; width: 80%; max-width: 100%; height: auto;">
            <p>${certDetails.description}</p>
            <p><strong>Credential ID:</strong> ${certDetails.credentialId}</p>
            <p><a class="my-link" href="${certDetails.credentialUrl}" target="_blank">View Credential</a></p>
        `;
        document.getElementById('project-modal').classList.add('active');
        document.getElementById('modal-overlay').classList.add('active');
        document.body.classList.add('modal-active');

        // Reset scroll position after the modal is rendered
        setTimeout(() => {
            const modalContentElement = document.querySelector('.modal-content');
            if (modalContentElement) {
                modalContentElement.scrollTop = 0;
            }
        }, 0);
    }
}


// Function to show popup messages
function showPopup(message, type) {
    const responseBox = document.querySelector("#formResponse");
    const responseMessage = document.querySelector("#responseMessage");

    // Clear previous content
    responseMessage.innerHTML = '';

    // Create HTML for icon
    let iconHtml = '';
    if (type === 'success') {
        iconHtml = `
        <svg class="popup-svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10C22,6.477,17.523,2,12,2z M17.707,9.707l-7,7 C10.512,16.902,10.256,17,10,17s-0.512-0.098-0.707-0.293l-3-3c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L10,14.586 l6.293-6.293c0.391-0.391,1.023-0.391,1.414,0S18.098,9.316,17.707,9.707z"></path>
        </svg>
        `;
    } else {
        iconHtml = `
        <svg class="popup-svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12,2C6.47,2,2,6.47,2,12c0,5.53,4.47,10,10,10s10-4.47,10-10C22,6.47,17.53,2,12,2z M16.707,15.293 c0.391,0.391,0.391,1.023,0,1.414C16.512,16.902,16.256,17,16,17s-0.512-0.098-0.707-0.293L12,13.414l-3.293,3.293 C8.512,16.902,8.256,17,8,17s-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414L10.586,12L7.293,8.707 c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L12,10.586l3.293-3.293c0.391-0.391,1.023-0.391,1.414,0 s0.391,1.023,0,1.414L13.414,12L16.707,15.293z"></path>
        </svg>
        `;
    }

    // Combine icon and message in the new structure
    responseMessage.innerHTML = `
        <div class="popup-icon">${iconHtml}</div>
        <div class="popup-message">${message}</div>
    `;

    // Set the appropriate class for styling
    responseBox.className = `popup-box ${type}`;

    // Show the popup
    responseBox.classList.add('show');

    setTimeout(() => {
        responseBox.classList.remove('show');
    }, 4500);
}

// Function to set up the contact form
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(contactForm);

            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            })
                .then(async (response) => {
                    let json = await response.json();
                    if (response.status === 200) {
                        showPopup('Your message has been sent successfully!', 'success');
                        contactForm.reset();
                    } else {
                        console.log(json);
                        showPopup('Something went wrong, please try again.', 'error');
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                    showPopup('Something went wrong, please try again.', 'error');
                });
        });
    }
}

// Main onload function
window.onload = function () {
    // Set theme on load for screen readers
    reflectPreference();

    // Theme toggle event listener
    document.querySelector('#theme-toggle').addEventListener('click', onClick);

    // Navigation menu event listeners
    document.querySelectorAll('.menu-item').forEach((item) => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelectorAll('.menu-item').forEach((el) => el.classList.remove('active'));
            this.classList.add('active');
            const section = this.getAttribute('data-section');
            document.getElementById('main-content').innerHTML = content[section];

            // If the section is 'contact', set up the form event listener
            if (section === 'contact') {
                setupContactForm();
            }

            if (section === 'projects') {
                initializeProjectsSection();
            }

            // Initialize Awards and Recognition when loading experience section
            if (section === 'experience') {
                initializeAwardsandRecognitionCards();
            }

            // Modify your navigation event listener
            if (section === 'education') {
                initializeCertificationsSection();
            }
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        const link = document.querySelector('.my-link');
        link.addEventListener('click', function() {
            link.classList.add('clicked');
        });
    });

    // Initially load "Projects" section
    document.getElementById('main-content').innerHTML = content['projects'];

    // Initialize projects section
    initializeProjectsSection();
};

// Function to initialize project card click events
function initializeProjectCards() {
    document.querySelectorAll('.project-card[data-project-id]').forEach((card) => {
        card.addEventListener('click', function () {
            const projectId = this.getAttribute('data-project-id');
            openProjectModal(projectId);
        });
    });
}

function setGridColumns() {
    const projectsGrid = document.getElementById('projects-grid');
    if (projectsGrid) {
        // Get the width of the grid container
        const gridWidth = projectsGrid.offsetWidth;
        // Get the width of a single project card (assuming they are all the same)
        const card = projectsGrid.querySelector('.project-card');
        if (card) {
            const cardWidth = card.offsetWidth + 20; // Add gap width (20px)
            // Calculate the number of columns that fit
            const columns = Math.floor(gridWidth / cardWidth);
            // Set the CSS variable
            projectsGrid.style.setProperty('--columns', columns);
        }
    }
}

// Function to initialize Awards and Recognition card click events
function initializeAwardsandRecognitionCards() {
    // Populate the Awards and Recognition grid
    const AwardsandRecognitionContainer = document.getElementById('AwardsandRecognition-grid');
    AwardsandRecognitionContainer.innerHTML = Object.keys(AwardsandRecognitionData).map(arId => {
        const ar = AwardsandRecognitionData[arId];
        return `
            <div class="project-card card" data-ar-id="${arId}">
                <img src="${ar.image}" alt="${ar.title}">
                <h3>${ar.title}</h3>
            </div>
        `;
    }).join('');

    // Add click event listeners to Awards and Recognition cards
    document.querySelectorAll('.project-card[data-ar-id]').forEach((card) => {
        card.addEventListener('click', function () {
            const arId = this.getAttribute('data-ar-id');
            openAwardsandRecognitionModal(arId);
        });
    });
}

// Project and Awards and Recognition modal functionality
document.addEventListener('click', function (e) {
    if (e.target && (e.target.matches('.close-button') || e.target.matches('.modal-overlay'))) {
        closeProjectModal();
    }

    // Close modal if click outside modal-content
    if (e.target.matches('.modal') && !e.target.closest('.modal-content')) {
        closeProjectModal();
    }
});

// Close modal on 'Esc' key press
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && document.body.classList.contains('modal-active')) {
        closeProjectModal();
    }
});

function getAllCategories() {
    const categories = new Set();
    categories.add('All'); // Include 'All' category
    for (const projectId in projectData) {
        const project = projectData[projectId];
        if (project.categories) {
            project.categories.forEach(category => categories.add(category));
        }
    }
    return Array.from(categories);
}

function renderCategoryButtons() {
    const categories = getAllCategories();
    const categoriesContainer = document.getElementById('project-categories');
    categoriesContainer.innerHTML = categories.map(category => `
        <button class="category-button" data-category="${category}">${category}</button>
    `).join('');
    
    // Add event listeners to category buttons
    document.querySelectorAll('.category-button').forEach(button => {
        button.addEventListener('click', function() {
            const selectedCategory = this.getAttribute('data-category');
            // Remove 'active' class from all buttons
            document.querySelectorAll('.category-button').forEach(btn => btn.classList.remove('active'));
            // Add 'active' class to the clicked button
            this.classList.add('active');
            // Render projects based on selected category
            renderProjects(selectedCategory);
        });
    });
}

function renderProjects(category) {
    const projectsGrid = document.getElementById('projects-grid');
    let projectsToDisplay = [];

    if (category === 'All') {
        projectsToDisplay = Object.keys(projectData);
    } else {
        projectsToDisplay = Object.keys(projectData).filter(projectId => {
            const project = projectData[projectId];
            return project.categories && project.categories.includes(category);
        });
    }

    projectsGrid.innerHTML = projectsToDisplay.map(projectId => {
        const project = projectData[projectId];
        return `
            <div class="project-card card" data-project-id="${projectId}">
                <img src="${project.image}" alt="${project.title}" style="width: 100%; height: auto; border-radius: 15px; aspect-ratio: 16 / 9; object-fit: cover;">
                <h3>${project.title}</h3>
                <p>${project.shortDescription}</p>
                <p style="font-size: 70%; text-align: center;">(Click to see project details)</p>
            </div>
        `;
    }).join('');

    // Re-initialize project card click events
    initializeProjectCards();

    // Set the grid columns based on current layout
    setTimeout(setGridColumns, 0);
}

function initializeProjectsSection() {
    // Render category buttons
    renderCategoryButtons();

    // By default, select 'All' category
    const defaultCategoryButton = document.querySelector('.category-button[data-category="All"]');
    if (defaultCategoryButton) {
        defaultCategoryButton.classList.add('active');
    }

    // Render projects for 'All' category
    renderProjects('All');

    // Set the grid columns based on initial load
    setTimeout(setGridColumns, 0);
}

window.addEventListener('resize', function() {
    setGridColumns();
});

// Function to initialize Certifications section
function initializeCertificationsSection() {
    const certificationsContainer = document.getElementById('certifications-grid');
    if (certificationsContainer) {
        certificationsContainer.innerHTML = Object.keys(certificationsData).map(certId => {
            const cert = certificationsData[certId];
            return `
                <div class="project-card card">
                    <img src="${cert.image}" alt="${cert.title}" data-cert-id="${certId}" style="width: 100%; height: auto; border-radius: 15px; object-fit: cover; cursor: pointer;">
                    <h3 style="text-align: center;">${cert.title}</h3>
                    <p style="font-size: 70%; text-align: center;"><a class="my-link" href="${cert.credentialUrl}" target="_blank">(Click to view credentials)</a></p>
                </div>
            `;
        }).join('');

        // Add click event listeners to certification images only
        document.querySelectorAll('.project-card img[data-cert-id]').forEach((img) => {
            img.addEventListener('click', function () {
                const certId = this.getAttribute('data-cert-id');
                openCertificationModal(certId);
            });
        });
    }
}

// Sync with system changes (Theme switching logic)
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches: isDark }) => {
    theme.value = isDark ? 'dark' : 'light';
    setPreference();
});
