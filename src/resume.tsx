import '@icon-park/react/styles/index.css';
import {
  Mail,
  PhoneTelephone,
  Github,
  School,
  EngineeringBrand,
  CalendarThree,
} from '@icon-park/react';

export const Resume: React.FC = () => {
  return (
    <div className="relative h-full w-screen">
      <div className="shadow-[3px 3px 9px rgba(0,0,0,.2)]  mx-auto mt-[10px] w-[1030px] bg-white px-0">
        <div className="flex  justify-between bg-[#333] px-[45px] py-[30px]">
          <address className="text-[#fff]">
            <ul className="contact">
              <li className="flex items-center justify-start text-[18px] leading-loose">
                <Mail
                  className="mr-[5px]"
                  theme="outline"
                  size="24"
                  fill="#fff"
                />
                <span>326534215@qq.com</span>
              </li>
              <li className="flex items-center justify-start gap-[5px] text-[18px] leading-loose">
                <PhoneTelephone theme="outline" size="24" fill="#fff" />
                <span>15728528873</span>
              </li>
              <li className="flex items-center justify-start gap-[5px] text-[18px] leading-loose">
                <Github theme="outline" size="24" fill="#fff" />
                <a href="https://github.com/laboonly">
                  https://github.com/laboonly
                </a>
              </li>
              <li className="flex items-center justify-start  gap-[5px] text-[18px] leading-loose">
                <CalendarThree theme="outline" size="24" fill="#fff" />
                <span>94年</span>
              </li>
            </ul>
          </address>
          <section className="text-right text-[#fff]">
            <h1 className="my-[5px] py-[5px] text-[72px]">刘毅</h1>
            <h2 className="text-[20.8px]">应聘职位:前端工程师(深圳)</h2>
          </section>
        </div>
        <article className="flex w-full justify-start px-[45px] py-[20px]">
          <div className="box pr-[56px]">
            <section>
              <div>
                <h3 className="flex items-center justify-start gap-[8px]">
                  <School theme="outline" size="32" fill="#333" />
                  <span className="text-[23px] font-medium">个人简介</span>
                </h3>
              </div>
              <div>
                <div className="w-full rounded-[6px] bg-[#333] py-[3px] pl-[26px] pr-[10px] text-[#fff]">
                  <p className="text-[18px]">个人经历</p>
                </div>
                <div className="ml-[22px] border-l-[4px] border-[#333] pl-[26px] pt-[5px]">
                  <h3>湖南科技大学潇湘学院(本科)</h3>
                  <ul>
                    <li>专业: 计算机科学与技术</li>
                    <li>湖南科技大学ACM实验室</li>
                  </ul>
                  <h3>MommyDaddyMe(2017-2020)</h3>
                  <h3>虹川科技(2020-2021)</h3>
                  <h3>Vika 维格智数(2022-2023)</h3>
                  <ul>
                    <li>高级前端开发</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="w-full rounded-[6px] bg-[#333] py-[3px] pl-[26px] pr-[10px] text-[#fff]">
                  <p className="text-[18px]">优势</p>
                </div>
                <div className="ml-[22px] border-l-[4px] border-[#333] pl-[26px] pt-[5px]">
                  {/* <h3>湖南科技大学潇湘学院(本科)</h3> */}
                  <ul>
                    <li>ACM实验室出身具有扎实的算法基础和问题分析能力</li>
                    <li>
                      作为主要人员参与开发过
                      <strong>Star10K以上开源项目</strong>
                      {/* ,如<strong>https://github.com/apitable/apitable</strong> */}
                    </li>
                    <li>
                      独立负责并成功交付多个复杂项目,拥有丰富的项目架构及高难度功能开发经验
                    </li>
                    <li>善于分析问题本质,独立提出有效的创新性解决方案</li>
                    <li>良好的团队协作和沟通能力,能与团队高效配合</li>
                    <li>
                      对代码质量和用户体验有强烈的追求,具备较强的设计和优化意识
                    </li>
                    <li>持续关注前端技术发展趋势,具备较强的自学能力</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          <div className="box pr-[56px]">
            <section className="">
              <div>
                <h3 className="flex items-center justify-start gap-[8px]">
                  <School theme="outline" size="32" fill="#333" />
                  <span className="text-[23px] font-medium">专业技能</span>
                </h3>
              </div>
              <div>
                <div className="h-[33px] w-full rounded-[6px] bg-[#333] py-[3px] pl-[26px] pr-[10px] text-[#fff]">
                  {/* <p className="text-[18px]">前端</p> */}
                </div>
                <div className="ml-[22px] border-l-[4px] border-[#333] pl-[26px] pt-[10px]">
                  7年前端开发从业经历,熟悉 JS
                  底层原理,熟悉浏览器底层原理,熟悉各类前端开发技术栈,包括但不限于
                  <strong>JavaScript</strong>/<strong>HTML</strong>/
                  <strong>CSS3</strong>/<strong>React</strong>/
                  <strong>Webpack</strong> <strong>Vite</strong>/
                  <strong>typeScript</strong>等,
                  熟悉前端开发的最佳实践,能高效完成从需求分析到代码实现的全流程工作
                </div>
                <div className="ml-[22px] border-l-[4px] border-[#333] pl-[26px] pt-[10px]">
                  熟练掌握前端<strong>React</strong>
                  开发框架,研究过其实现原理细节,掌握框架相关生态的各项技术
                  <strong>Redux</strong>,<strong>zustand</strong>,
                  <strong>tailwindcss</strong>,<strong>react-konva</strong>
                  等。有丰富的项目实践经验。
                </div>
                <div className="ml-[22px] border-l-[4px] border-[#333] pl-[26px] pt-[10px]">
                  熟悉浏览器原理以及<strong>Http</strong>
                  相关技术，在性能优化方面有实践经验。
                </div>
                <div className="ml-[22px] border-l-[4px] border-[#333] pl-[26px] pt-[10px]">
                  对前端工程模块化有一定理解，熟悉<strong>webpack</strong>、
                  <strong>vite</strong>
                  等打包工具及其日常开发配置，可以从0到1独立搭建项目，并优化构建流程。
                </div>
                <div className="ml-[22px] border-l-[4px] border-[#333] pl-[26px] pt-[10px]">
                  了解<strong>Node.js</strong>
                  服务端语言，能够快速构建后端接口和处理服务器端逻辑，保证项目的顺利推进。
                </div>
                <div className="ml-[22px] border-l-[4px] border-[#333] pl-[26px] pt-[10px]">
                  在多个项目中独立负责，具备设计和实施前端架构的能力。
                </div>
              </div>
            </section>
          </div>
        </article>
        <article className="page flex justify-start px-[45px] pb-[30px]">
          <div className="w-full">
            <section>
              <div>
                <h3 className="flex h-[34.5px] items-center justify-start gap-[8px]">
                  <EngineeringBrand theme="outline" size="32" fill="#333" />
                  <span className="text-[23px] font-medium">项目经验</span>
                </h3>
              </div>
              <div>
                <div className="w-[50%] rounded-[6px] bg-[#333] py-[3px] pl-[26px] pr-[10px] text-[#fff]">
                  <p className="text-[18px]">
                    Vika维格表 - 多人在线协同编辑表格
                  </p>
                </div>
                <div className="ml-[22px] border-l-[4px] border-[#333] pl-[26px] pt-[10px]">
                  <p className="font-bold ">项目描述:</p>
                  <ul>
                    <li>
                      一款多人在线协同编辑的表格,支持10万+数据类似于 Google
                      表格，但它具有更多的自定义功能和团队协作工具。维格表支持丰富的视图、数据关系、自动化流程和
                      API 接口，适用于项目管理、数据分析和团队协作等多个场景。
                    </li>
                    {/* <li>
                      丰富的数据格式包括多行文本、单选多选、日期、上传附件、成员、勾选、评分、电话、邮箱、公式、神器关联等。
                    </li>
                    <li>支持自动化任务</li>
                    <li>权限分配，消息通知，通讯录管理，表格分享</li>
                    <li>支持跨表引用</li> */}
                  </ul>
                  <p className="font-bold ">主要职责:</p>
                  <ul>
                    <li>
                      1.
                      开发与优化基础表格模块,提升表格编辑和展示的性能和用户体验：
                    </li>
                    <li className="pl-[18px]">
                      将公司表格视图以及甘特视图由原先的Dom渲染改成canvas渲染,实现canvas表格的无限列表,开发表格基于canvas基础的Text,Image,Line,Rect,Tooltip,Icon组件,
                      然后由此基础上构建的不同类型(单选,多选,评分,邮件,成员,时间)的单元格,实现表格的基础筛选,分组,冻结列以及单元格拖拽填充复制等其他高级功能。
                    </li>
                    <li>
                      2.
                      实现单向关联功能,增强数据之间的关联和联动能力以及归档箱功能
                    </li>
                    <li className="pl-[18px]">
                      实现两张协同表格的单项关联的前端ui,以及单项关联的后台数据处理机制。将不常用的数据进行归档,减少前端数据计算压力,解决归档箱数据关联计算问题
                    </li>
                    <li>
                      3.
                      开发嵌入维格表文档功能,方便用户将表格内容嵌入到其他文档中。提升了产品的可适应性。
                    </li>
                    <li className="pl-[18px]">
                      为维格表嵌入到飞书文档,Notion,腾讯文档等在线文档提供支持,使用iframe嵌入,修改权限以及人员管理模,多平台登录对接
                    </li>
                    <li>4. 开发地图小程序,支持在地图中展示和分析数据</li>
                    <li className="pl-[18px]">
                      以协同表格为基础,实现的一个地图插件,包括实时协同数据更新,根据经纬度生成标点,标点展示位置所对应的行的数据详情
                    </li>
                  </ul>
                  <p className="font-bold ">项目成果:</p>
                  <ul>
                    <li>
                      1.
                      优化了整体产品的使用性能,表格加载速度提升了3倍,产品运行速度提升了50%
                    </li>
                    <li>
                      2.
                      开发了多项类似于任务关联,单项关联,数据回收站,表格嵌入等同类竞品没有的功能.丰富了公司产品功能提高公司产品竞争力
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </article>
        <article className="flex w-full flex-col px-[45px] py-[20px]">
          <div className="w-full">
            <section>
              <div>
                <h3 className="flex items-center justify-start gap-[8px]">
                  <EngineeringBrand theme="outline" size="32" fill="#333" />
                  <span className="text-[23px] font-medium">项目经验</span>
                </h3>
              </div>
              <div>
                <div className="w-[50%] rounded-[6px] bg-[#333] py-[3px] pl-[26px] pr-[10px] text-[#fff]">
                  <p className="text-[18px]">赏金猎人小程序</p>
                </div>
                <div className="ml-[22px] border-l-[4px] border-[#333] pl-[26px] pt-[10px]">
                  <p className="font-bold ">项目描述:</p>
                  <ul>
                    <li>
                      1.
                      一个招聘类赏金小程序,分个人和公司角色,前端模块包括职位列表、收藏个人中心、推荐、流程审核等,共计
                      70+ 页面。后端提供了相应的数据服务和业务逻辑支持
                    </li>
                    <li>
                      2. 前端采用了<strong>Taro</strong>、<strong>React</strong>
                      <strong>tailwindcss</strong>
                      生态搭配<strong>zustand</strong>状态管理
                    </li>
                    <li>
                      3. 后端采用<strong>nest.js</strong>、
                      <strong>prisma</strong>、<strong>mysql</strong>、
                      <strong>docker</strong>
                    </li>
                  </ul>
                  <p className="font-bold ">主要职责:</p>
                  <ul>
                    <li>
                      1.
                      负责整个小程序的前后端架构的搭建,包括技术选型、基础设施部署等工作
                    </li>
                    <li className="pl-[18px]">
                      选择了跨平台框架Taro搭配react生态链,zustand状态管理,并且实践了tailwindcss在小程序中的应用
                    </li>
                    <li>
                      2.
                      独立完成了整个小程序的前后端开发工作,包括业务逻辑实现、界面设计、API
                      接口开发等
                    </li>
                    <li className="pl-[18px]">
                      高质量完成了来自字节ui设计的70+页面。自己手写了卡片切换,搜索栏动画等定制页面,后端采用nest.js+prsima+mysql的模式,快速开发了50+api
                    </li>
                  </ul>
                  <p className="font-bold ">项目成果:</p>
                  <ul>
                    <li>
                      1. 在整个项目开发过程中,独立完成了项目的全生命周期管理
                    </li>
                    <li>2. 确保项目按时保质完成,达成预期目标</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <div>
                <h3 className="flex h-[34.5px] items-center justify-start gap-[8px]">
                  {/* <EngineeringBrand theme="outline" size="32" fill="#333" />
                  <span className="text-[23px] font-medium">项目经验</span> */}
                </h3>
              </div>
              <div>
                <div className="w-[50%] rounded-[6px] bg-[#333] py-[3px] pl-[26px] pr-[10px] text-[#fff]">
                  <p className="text-[18px]">
                    飞书多维表格仪表盘轮播图插件(开源项目)
                  </p>
                </div>
                <div className="ml-[22px] border-l-[4px] border-[#333] pl-[26px] pt-[10px]">
                  <p className="font-bold ">项目描述:</p>
                  <ul>
                    <li>
                      项目旨在为飞书用户提供一个可定制的轮播图插件,能够从多维表格数据中选择图片和文本字段进行轮播展示。
                    </li>
                    {/* <li>
                      根据用户配置，选择表格数据，数据范围，字体样式，轮播图样式渲染轮播图.
                    </li> */}
                  </ul>
                  <p className="font-bold ">主要职责:</p>
                  <ul>
                    <li>
                      1. 仔细研究了飞书产品的文档和 UI
                      设计,选择了合适的技术栈,包括 React、zustand
                      等前端库,并设计出符合要求的整体架构。
                    </li>
                    <li>
                      2.
                      独立完成了轮播图的核心功能开发,包括从多维表格中读取数据、支持图文配置、实现平滑轮播等。同时,我还实现了预览刷新和配置保存的功能,方便用户使用。
                    </li>
                    <li>
                      3. 针对 Semi UI
                      的颜色选择和字体选择组件,我进行了定制化改造,使其能够完全满足项目的样式需求
                    </li>
                  </ul>
                  <p className="font-bold ">项目成果:</p>
                  <ul>
                    <li>
                      1.
                      这个开源的飞书多维表格仪表盘轮播图插件最终顺利完成了内测和发布,成为飞书仪表盘插件体系中的一个重要组成部分
                    </li>
                    <li>2. 帮助飞书开发人员测试了仪表盘api，反馈了不少问题</li>
                    {/* <li>2. 按照预期完成了整个插件项目</li> */}
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <div>
                <h3 className="flex h-[34.5px] items-center justify-start gap-[8px]">
                  {/* <EngineeringBrand theme="outline" size="32" fill="#333" />
                  <span className="text-[23px] font-medium">项目经验</span> */}
                </h3>
              </div>
              <div>
                <div className="w-[50%] rounded-[6px] bg-[#333] py-[3px] pl-[26px] pr-[10px] text-[#fff]">
                  <p className="text-[18px]">
                    飞书多维表格仪表盘打印设计器插件(开源项目)
                  </p>
                </div>
                <div className="ml-[22px] border-l-[4px] border-[#333] pl-[26px] pt-[10px]">
                  <p className="font-bold ">项目描述:</p>
                  <ul>
                    <li>
                      1.
                      飞书多位表格插件，该插件不仅支持从多维表格中读取数据,还能够渲染可拖拽的文本、图片、表格和
                      PDF
                      等组件,并提供自由排版和样式编辑功能。此外,该插件还具有模板保存功能,并支持连接其他数据源进行打印。
                    </li>
                    <li>
                      2.项目框架以及相关库: <strong>React</strong>、
                      <strong>typescript</strong>、<strong>Vite</strong>、
                      <strong>React-dnd</strong>、<strong>tailwind</strong>、
                      <strong>zustand</strong>、<strong>axios</strong>、
                    </li>
                  </ul>
                  <p className="font-bold ">主要职责:</p>
                  <ul>
                    <li>
                      1.
                      整个项目的技术选型,采用React,zustand状态管理,react-dnd实现拖拽功能。
                    </li>
                    <li className="pl-[18px]">
                      自己调研了产品需求,设计整个技术架构产品功能。实现了多元素拖拽布局,数据切换,打印模版主要功能。底层数据结构能适配不同表格
                    </li>
                  </ul>
                  <p className="font-bold ">项目成果:</p>
                  <ul>
                    <li>1. 成功完成打印设计器的各项工能并且上架飞书插件市场</li>
                    <li>2. 获得飞书插件市场使用排名前十</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
};
