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
          7 年前端开发经验，聚焦 React、Next.js
          与复杂企业级应用。具备从需求拆解、技术选型、架构设计到上线交付的完整经验；参与
          Star 10K+ 开源项目，擅长 AI Coding、CodeMirror 编辑器、Canvas
          渲染、性能优化及协同表格/插件类产品研发。
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
            <SkillTag>LSP / WebSocket</SkillTag>
            <SkillTag>浏览器渲染与性能</SkillTag>
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
              负责 AI Coding 工作台核心前端研发，覆盖 AI
              聊天、在线代码编辑器、任务通知与 AI
              改码流程，支撑从自然语言指令到代码生成、审阅与修复的完整交互链路。
            </li>
            <li>
              基于 CodeMirror 对接 LSP 与 <strong>@codemirror/lint</strong>
              ，实现面向多语言的诊断展示、错误面板、悬浮提示、快捷键导航与{' '}
              <strong>Fix in Chat</strong>，并兼容代码跳转、自动补全和 AI
              改码流程。
            </li>
            <li>
              研发 CodeMirror Minimap，聚合展示 AI Diff、搜索结果、选区、光标与
              Lint 状态，支持 Diff
              块快速定位；持续优化大文件跳转和复杂会话下的渲染性能。
            </li>
            <li>
              参与 AI 修改“时间机器”能力建设，打通前端、Diff Toolbar 与 IDE
              Server 的快照协议，实现新增、删除、修改文件的单文件/批量文件{' '}
              <strong>revert</strong>、<strong>restore</strong>、
              <strong>rollback</strong>，并支持服务端快照持久化。
            </li>
            <li>
              补充 CodeMirror、Lint 与 Minimap
              的单元测试和增量覆盖率检查，提升编辑器核心模块的稳定性与可维护性。
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
              等基础组件及多类型单元格渲染能力。
            </li>
            <li>
              实现无限列表、筛选、分组、冻结列、拖拽填充与复制等高频交互，解决复杂数据量下表格编辑与展示的性能问题。
            </li>
            <li>
              交付单向关联、归档箱、表格嵌入及地图插件等关键能力；支持飞书、Notion、腾讯文档等平台的
              iframe 嵌入、多平台登录与权限接入。
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
              独立完成技术选型、前后端架构与基础设施部署，覆盖需求拆解、开发、自测与发布的完整交付流程。
            </li>
            <li>
              基于 Taro + React + Zustand
              构建跨端招聘小程序，完成职位、收藏、推荐、个人中心和流程审核等{' '}
              <strong>70+</strong> 页面。
            </li>
            <li>
              使用 NestJS、Prisma 与 MySQL 设计并实现 <strong>50+</strong> 个
              API，支撑个人与企业双角色的招聘业务流程。
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
              独立完成轮播图插件，从多维表格读取数据，支持图文配置、平滑轮播、预览刷新和配置持久化，并完成内测发布。
            </li>
            <li>
              设计并交付打印设计器，支持文本、图片、表格、PDF
              等元素的自由拖拽排版、模板保存与多数据源打印。
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
