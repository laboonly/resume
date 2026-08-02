import '@icon-park/react/styles/index.css';
import { Github, Mail, PhoneTelephone } from '@icon-park/react';

const SkillTag = ({ children }: { children: React.ReactNode }) => (
  <span className="skill-tag">{children}</span>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="section-title">{children}</h2>
);

export const Resume: React.FC = () => {
  return (
    <main className="resume">
      <header className="resume-header">
        <div>
          <h1>刘毅</h1>
          <p className="target-role">高级前端工程师 · 深圳</p>
        </div>
        <address className="contact-list">
          <a href="mailto:326534215@qq.com">
            <Mail theme="outline" size="18" fill="currentColor" />
            326534215@qq.com
          </a>
          <a href="tel:15728528873">
            <PhoneTelephone theme="outline" size="18" fill="currentColor" />
            15728528873
          </a>
          <a
            href="https://github.com/laboonly"
            target="_blank"
            rel="noreferrer"
          >
            <Github theme="outline" size="18" fill="currentColor" />
            github.com/laboonly
          </a>
        </address>
      </header>

      <section>
        <SectionTitle>个人概述</SectionTitle>
        <p className="summary">
          7 年前端开发经验，专注 React、Next.js
          与复杂企业级应用。具备从需求拆解、技术选型、前端架构到交付上线的完整经验；参与
          Star 10K+ 开源项目，擅长 AI 编程工具、CodeMirror 编辑器、Canvas
          渲染、性能优化、协同表格与插件类产品开发。
        </p>
      </section>

      <section>
        <SectionTitle>核心技能</SectionTitle>
        <div className="skills-grid">
          <div>
            <b>前端框架：</b>
            <SkillTag>React</SkillTag>
            <SkillTag>Next.js</SkillTag>
            <SkillTag>TypeScript</SkillTag>
            <SkillTag>JavaScript</SkillTag>
            <SkillTag>Taro</SkillTag>
            <SkillTag>React DnD</SkillTag>
          </div>
          <div>
            <b>状态与样式：</b>
            <SkillTag>Zustand</SkillTag>
            <SkillTag>Redux</SkillTag>
            <SkillTag>Tailwind CSS</SkillTag>
            <SkillTag>React Konva</SkillTag>
          </div>
          <div>
            <b>工程化与性能：</b>
            <SkillTag>Vite</SkillTag>
            <SkillTag>Webpack</SkillTag>
            <SkillTag>CodeMirror</SkillTag>
            <SkillTag>Canvas</SkillTag>
            <SkillTag>浏览器原理</SkillTag>
            <SkillTag>HTTP</SkillTag>
          </div>
          <div>
            <b>服务端与部署：</b>
            <SkillTag>Node.js</SkillTag>
            <SkillTag>NestJS</SkillTag>
            <SkillTag>Prisma</SkillTag>
            <SkillTag>MySQL</SkillTag>
            <SkillTag>Docker</SkillTag>
          </div>
        </div>
      </section>

      <section>
        <SectionTitle>工作经历</SectionTitle>
        <div className="timeline">
          <div className="experience">
            <div>
              <h3>至简天成（Clacky AI）</h3>
              <p>前端开发工程师 · AI 在线编程工具前端研发</p>
            </div>
            <time>2024 – 2025</time>
          </div>
          <div className="experience">
            <div>
              <h3>维格智数（Vika）</h3>
              <p>高级前端开发工程师</p>
            </div>
            <time>2022 – 2023</time>
          </div>
          <div className="experience">
            <div>
              <h3>虹川科技</h3>
            </div>
            <time>2020 – 2021</time>
          </div>
          <div className="experience">
            <div>
              <h3>MommyDaddyMe</h3>
            </div>
            <time>2017 – 2020</time>
          </div>
        </div>
      </section>

      <section>
        <SectionTitle>项目经验</SectionTitle>
        <article className="project">
          <div className="project-heading">
            <div>
              <h3>Clacky AI｜AI 在线编程工具</h3>
              <p>React · Next.js · TypeScript · CodeMirror · LSP</p>
            </div>
            <span>前端研发</span>
          </div>
          <ul>
            <li>
              参与 AI 在线编程工具前端研发，负责 AI 聊天窗、代码编辑器和 AI
              修改流程等核心交互模块。
            </li>
            <li>
              设计并实现 AI
              修改回退与快照持久化方案，将文件快照从浏览器侧迁移至服务端存储，支持跨浏览器恢复、单文件及批量修改的
              revert / rollback。
            </li>
            <li>
              基于 CodeMirror 对接 LSP 与 <strong>@codemirror/lint</strong>
              ，实现多语言错误/警告展示、问题详情、悬浮提示及{' '}
              <strong>Fix in Chat</strong>
              ，并兼容代码跳转、自动补全和 AI 改码流程。
            </li>
            <li>
              改造 CodeMirror Minimap，聚合展示 AI Diff、搜索命中、光标及 Lint
              状态，支持快速定位与 Diff 块切换；同时完成消息列表虚拟滚动和 Memo
              优化，降低复杂会话下的页面卡顿。
            </li>
          </ul>
        </article>

        <article className="project">
          <div className="project-heading">
            <div>
              <h3>维格表（Vika）｜多人在线协同表格</h3>
              <p>React · TypeScript · Canvas · 协同编辑</p>
            </div>
            <span>核心开发</span>
          </div>
          <ul>
            <li>
              主导表格视图与甘特视图从 DOM 渲染迁移至 Canvas，搭建
              Text、Image、Line、Rect、Tooltip、Icon
              等基础组件及多类型单元格能力。
            </li>
            <li>
              实现无限列表、筛选、分组、冻结列、拖拽填充与复制等高频交互；推动复杂表格编辑与展示性能优化。
            </li>
            <li>
              交付单向关联、归档箱、表格嵌入及地图插件等功能；支持飞书、Notion、腾讯文档等平台通过
              iframe 嵌入和多平台登录接入。
            </li>
            <li>
              <strong>成果：</strong>表格加载速度提升 3 倍，产品运行速度提升
              50%；新增多项差异化协作和数据管理能力。
            </li>
          </ul>
        </article>

        <article className="project">
          <div className="project-heading">
            <div>
              <h3>赏金猎人招聘小程序</h3>
              <p>Taro · React · Zustand · NestJS · Prisma · MySQL · Docker</p>
            </div>
            <span>全栈独立交付</span>
          </div>
          <ul>
            <li>
              负责项目技术选型、前后端架构与基础设施部署，完成从需求到发布的全生命周期开发。
            </li>
            <li>
              基于 Taro + React + Zustand
              构建跨端小程序，完成职位、收藏、推荐、个人中心和流程审核等{' '}
              <strong>70+</strong> 页面。
            </li>
            <li>
              使用 NestJS、Prisma 与 MySQL 设计并实现 <strong>50+</strong>{' '}
              API，支撑个人和企业双角色招聘业务流程。
            </li>
          </ul>
        </article>

        <article className="project">
          <div className="project-heading">
            <div>
              <h3>飞书多维表格仪表盘插件</h3>
              <p>React · TypeScript · Zustand · Vite · React DnD</p>
            </div>
            <span>开源项目</span>
          </div>
          <ul>
            <li>
              独立完成轮播图插件，支持读取多维表格数据、图文配置、平滑轮播、预览刷新和配置持久化，并完成内测发布。
            </li>
            <li>
              设计并交付打印设计器，支持文本、图片、表格、PDF
              等元素自由拖拽排版、模板保存与多数据源打印。
            </li>
            <li>
              <strong>成果：</strong>
              打印设计器上架飞书插件市场，进入使用排名前十；同时协助飞书团队验证仪表盘
              API 并反馈问题。
            </li>
          </ul>
        </article>
      </section>

      <section className="education">
        <SectionTitle>教育经历</SectionTitle>
        <div className="education-row">
          <div>
            <h3>湖南科技大学潇湘学院</h3>
            <p>计算机科学与技术 · 本科 · ACM 实验室</p>
          </div>
        </div>
      </section>
    </main>
  );
};
