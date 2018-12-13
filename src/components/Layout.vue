<style lang="postcss" scoped>
@import '../assets/common.pcss';
.ivu-btn-text:hover{
    background-color: rgba(255, 255, 255, .2) !important;
}
.ivu-layout.ivu-layout-has-sider{
    height: 100%;
}
.ivu-layout-sider{
    background: #fff;
    transition: none;
}
.ivu-layout-header{
    height: 60px;
    line-height: 60px;
}
.ivu-menu{
    height: calc(100% - 60px);
    overflow-y: auto;
}
.ivu-menu-item{
    white-space: nowrap;
}
.ivu-menu-submenu{
    white-space: nowrap;
    & .ivu-menu-submenu-title{
        white-space: nowrap;
    }
}

.dd-menu{
    width: 200px;
    min-width: 200px;
    height: 100%;
    & .ddi-wapper{
        display:flex;
        align-items:center;
        & .ddi-text{
            padding-left:10px;
        }
    }
}
.admin-layout-container{
    position: absolute;
    width: 100%;
    height: 100%;
    & .layout{
        background: #f5f7f9;
        position: relative;
        overflow: hidden;
        height: 100%;
        & .sidebar{
            background: #fff;
        }
        & .dropdown-wrap{
            height: 100%;
            position: relative;
            display: flex;
            flex-direction: column;
            background: #fff;
            box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
            z-index: 11;
            & .dw-content{    
                height: 100%;
                & .dd-btn{
                    width: 83px;
                    margin-left: -5px;
                    padding:10px 0;
                }          
            }              
        }
        & .logo{
            width: auto;
            height: 60px;
            display: flex;
            text-align: center;
            align-items: center;
            justify-content: flex-start;
            cursor: pointer;
            border-bottom: 1px solid #363e4f;
            position: relative;
            padding-left:20px;
            background: #0d58ab;
            & .logo-saiqu{
                display: flex;
                align-items: center;
                justify-content: flex-start;
                position: relative;     
                
                & .user-name{
                    color:#fff;
                    font-size:16px;
                    margin-left:15px;
                }
            }
           
        }
    }
    & .layout-header-bar{
        background: #fff;
        padding: 0;
        position: relative;
        display: flex;
        flex-direction: column;
        z-index: 20;
        width:100%;
        & .header-wapper{
            display:flex;
            align-tems:center;
            justify-content:space-between;
            position: relative;
            z-index: 1;
            box-shadow: 0 2px 1px 1px rgba(100, 100, 100, 0.1);
            background: #0e64c3;
            color: #fff;
            & .header-left{
                display:flex;
                align-items:center;
                & .header-title{
                    font-size:18px;
                    font-weight:bold
                }
            }
            & .header-right{
                margin-right:20px;                
                & .btn-blue{
                    color: #fff;
                    font-size:16px;
                }
            }
        }
    }

    & .main-content{
        width: 100%;
        height: calc(100% - 60px);
        position: relative;
        overflow: auto;
        & .main-layout-con{
            height: 100%;
            overflow: hidden;
            & .content-wrapper{
                overflow: auto;
                padding: 10px;
                position: relative;
                & .spinCls{
                    width: 60px !important;
                    height: 60px !important;
                    &::after{
                        background: linear-gradient(#0d58ab, #0256ac);
                    }
                }
            }
            & .tags-nav-wapper{
                background: #f0f0f0;
                height: 40px;
                padding: 0;
                & .tags-nav{
                    height: 100%;
                    width: 100%;
                    position: relative;
                    border-top: 1px solid #F0F0F0;
                    border-bottom: 1px solid #F0F0F0;
                    & .btn-con{
                        position: absolute;
                        top: 0px;
                        height: 100%;
                        background: #fff;
                        padding-top: 3px;
                        z-index: 10;            
                    }
                    & button{
                        padding: 6px 4px;
                        line-height: 14px;
                        text-align: center;
                    }
                    & .left-btn{
                        left: 0px;
                        border-right: 1px solid #F0F0F0;
                    }
                    & .right-btn{
                        right: 0px;
                        border-left: 1px solid #F0F0F0;
                    }
                    & .scroll-outer{
                        position: absolute;
                        left: 28px;
                        right: 28px;
                        top: 0;
                        bottom: 0;
                        box-shadow: 0px 0 3px 2px rgba(100,100,100,.1) inset;
                        & .scroll-body{
                            height: calc(100% - 1px);
                            display: inline-block;
                            padding: 1px 4px 0;
                            position: absolute;
                            overflow: visible;
                            white-space: nowrap;
                            transition: left .3s ease;
                            .ivu-tag-dot-inner{
                                transition: background .2s ease;
                            }
                        }
                    }
                    & .contextmenu {
                        position: absolute;
                        margin: 0;
                        padding: 5px 0;
                        background: #fff;
                        z-index: 100;
                        list-style-type: none;
                        border-radius: 4px;
                        box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);
                        & li {
                            margin: 0;
                            padding: 5px 15px;
                            cursor: pointer;
                            &:hover {
                                background: #eee;
                            }
                        }
                    }
                }
            }
        }
    }

    & .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }   
    
    & .menu-icon{
        cursor: pointer;
        transition: all .3s;
        margin: 0 20px 0;
    }
    & .rotate-icon{
        transform: rotate(-90deg);
    }
    & .menu-item {
        position: absolute;
        overflow: auto;
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
        &:after{
            width: 0;
        }
        & span{
            display: inline-block;
            white-space: nowrap;
            vertical-align: bottom;
            transition: width .2s ease .2s;
        }        
        & i{
            transform: translateX(0px);
            transition: font-size .2s ease, transform .2s ease;
            vertical-align: middle;
            font-size: 16px;
        }
    }
    & .collapsed-menu {
        & span{
            width: 0px;
            transition: width .2s ease;
        }
        & i{
            transform: translateX(5px);
            transition: font-size .2s ease .2s, transform .2s ease .2s;
            vertical-align: middle;
            font-size: 22px;
        }
    }
}

</style>
<template>
  <section class="admin-layout-container">
      <div class="layout">
        <Layout>
            <Sider ref="sidebar" class="sidebar" hide-trigger collapsible width="230" :collapsed-width="78" v-model.trim="isCollapsed">
                <div class="logo" >
                    <div class="xfind-line" v-if="!isCollapsed">
                        <div class="line-h"></div>
                    </div>
                    <div v-if="!isCollapsed" class="logo-saiqu">    
                        <Avatar icon="ios-person" size="large"/>    
                        <span class="user-name">Admin</span>
                    </div>
                    <Avatar icon="ios-person" size="large" v-else/>
                </div>
                <Menu
                    ref="side_menu"
                    :active-name="activeMenuName"
                    :open-names="openMenuName"
                    theme="light"
                    width="230px"
                    :class="menuitemClasses"
                    @on-select="choosedMenu"
                    v-if="!isCollapsed">
                    <template v-for="(menu,menu_index) in menus">
                        <Submenu :name="menu.name" v-if="menu.children" :key="menu_index">
                            <template slot="title">
                                <Icon :size="20" :type="menu.icon"></Icon>
                                <span>{{menu.title}}</span>
                            </template>
                            <MenuItem :name="child.name" v-for="(child ,child_index) in menu.children" :key="child_index">
                                <Icon :size="20" :type="child.icon"></Icon>
                                <span>{{child.title}}</span>
                            </MenuItem>
                        </Submenu>
                        <MenuItem :name="menu.name" v-if="!menu.children && menu.showInMenus" :key="menu_index">
                            <Icon :size="20" :type="menu.icon" :key="menu_index"></Icon>
                            <span>{{menu.title}}</span>
                        </MenuItem>
                    </template>
                </Menu>
                <div class="dropdown-wrap"  v-if="isCollapsed">
                    <div class="dw-content">
                        <template v-for="(menu,menu_index) in menus">
                            <Dropdown transfer placement="right-start" v-if="menu.children" @on-click="dropdownClick" :key="menu_index">
                                <Button class="dd-btn" type="text">
                                    <Icon :size="25" :type="menu.icon"></Icon>
                                </Button>
                                <DropdownMenu class="dd-menu" slot="list">
                                    <template v-for="(child, i) in menu.children">
                                        <DropdownItem :name="child.name" :key="i">
                                            <div class="ddi-wapper">
                                                <Icon :size="16" :type="child.icon"></Icon>
                                                <span class="ddi-text">
                                                    {{ child.title }}
                                                </span>
                                            </div>
                                        </DropdownItem>
                                    </template>
                                </DropdownMenu>
                            </Dropdown>
                            <Dropdown transfer v-if="!menu.children && menu.showInMenus" placement="right-start" @on-click="dropdownClick" :key="menu_index">
                                <Button class="dd-btn" type="text">
                                    <Icon :size="25" :type="menu.icon"></Icon>
                                </Button>
                                <DropdownMenu class="dd-menu" slot="list">
                                    <DropdownItem :name="menu.name">
                                        <div class="ddi-wapper">
                                            <Icon :size="16" :type="menu.icon"></Icon>
                                            <span class="ddi-text">
                                                {{ menu.title }}
                                            </span>
                                        </div>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </template>
                    </div>
                </div>
            </Sider>
            <Layout>
                <!-- :style="{width: isCollapsed?'calc(100% - 78px)':'calc(100% - 230px)'}" -->
                <Header class="layout-header-bar">
                    <div class="header-wapper">
                        <div class="header-left">
                            <Icon @click.native="collapsedSider" :class="rotateIcon" type="md-menu" size="28"></Icon>
                            <span class="header-title">iView后台管理系统</span>
                        </div>
                        <div class="header-right">
                            <!-- <Button type="text" icon="person" size="large">个人中心</Button>
                            <Button type="text" icon="android-notifications" size="large" @click="clickNotice">消息通知</Button> -->
                            <!-- <Dropdown>
                                <a href="javascript:void(0)">
                                    下拉菜单
                                    <Icon type="ios-arrow-down"></Icon>
                                </a>
                                <DropdownMenu slot="list">
                                    <DropdownItem>驴打滚</DropdownItem>
                                    <DropdownItem>炸酱面</DropdownItem>
                                </DropdownMenu>
                            </Dropdown> -->
                            <Button type="text" icon="md-exit" class="btn-blue" size="large" @click="quit">退出系统</Button>
                        </div>
                    </div>
                </Header>
                 <!-- :style="{width:isCollapsed?'calc(100% - 78px)':'calc(100% - 230px)'}" -->
                <Content class="main-content">
                    <Layout class="main-layout-con">
                        <div class="tags-nav-wapper">
                            <div class="tags-nav">
                                <div class="btn-con left-btn">
                                    <Button type="text" @click="handleScroll(240)">
                                        <Icon :size="18" type="ios-arrow-back" />
                                    </Button>
                                </div>
                                <div ref="scrollOuter" class="scroll-outer" @DOMMouseScroll="handlescroll" @mousewheel="handlescroll">
                                    <div ref="scrollBody" class="scroll-body" :style="{left: tagBodyLeft + 'px'}">
                                        <transition-group name="taglist-moving-animation">
                                            <Tag type="dot"
                                                v-for="tab in tags"
                                                :closable="tab.closable"
                                                :color="tab.choosed? 'primary':'#e9eaec'"
                                                :name="tab.name"
                                                @click.native="clickTag(tab)"
                                                @on-close="closeTag" 
                                                :key="tab.name">
                                                    {{tab.title}}
                                                </Tag>
                                        </transition-group>
                                    </div>
                                </div>
                                <div class="btn-con right-btn">
                                    <Button type="text" @click="handleScroll(-240)">
                                        <Icon :size="18" type="ios-arrow-forward" />
                                    </Button>
                                </div>
                            </div>
                        </div>           
                        <Content class="content-wrapper">
                            <!-- <Spin size="large" fix v-if="spinShow">
                                <Circle2 />
                            </Spin> -->
                            <!--保存组件状态到内存，避免重新渲染-->
                            <keep-alive>
                                <router-view/>
                            </keep-alive>
                        </Content>
                    </Layout>                    
                </Content>
            </Layout>
        </Layout>
    </div>
  </section>
</template>
<script>
export default {
    data(){
        return{
            isCollapsed: false,
            // ------------------------------  菜单操作开始  --------------------------------
            title:'首页',
            activeMenuName:'admin',
            openMenuName:[],

            tagBodyLeft: 0,
            rightOffset: 40,
            outerPadding: 4,
            contextMenuLeft: 0,
            contextMenuTop: 0,
            visible: false,

            menus:[
                {
                    title:'首页',
                    num:1,
                    name:'admin',
                    icon:'ios-home',
                    href:'/home',
                    closable:false,
                    showInTags:true,
                    showInMenus:true,
                    choosed:true
                },         
                {
                    title:'会员与代理商',
                    name:'members-agents',
                    icon:'ios-people',
                    children:[
                        {
                            title:'会员管理',
                            name:'memberManage',
                            href:'/home',
                            closable:true,
                            showInTags:false,
                            showInMenus:true,
                            choosed:false
                        },
                        {
                            title:'会员等级管理',
                            name:'memberLevels',
                            href:'/home',
                            closable:true,
                            showInTags:false,
                            showInMenus:true,
                            choosed:false
                        },
                        {
                            title:'会员汇入',
                            name:'memberRemit',
                            href:'/home',
                            closable:true,
                            showInTags:false,
                            showInMenus:true,
                            choosed:false
                        },
                        {
                            title:'代理商管理',
                            name:'agentManage',
                            href:'/home',
                            closable:true,
                            showInTags:false,
                            showInMenus:true,
                            choosed:false
                        },
                        {
                            title:'代理商申请审核',
                            name:'agent-audit',
                            href:'/home',
                            closable:true,
                            showInTags:false,
                            showInMenus:true,
                            choosed:false
                        }
                    ]
                },
                {
                    title:'系统管理',
                    name:'system-manage',
                    icon:'ios-cog',
                    children:[
                        {
                            title:'返水设置',
                            name:'backwater-setting',
                            href:'/home',
                            closable:true,
                            showInTags:false,
                            showInMenus:true,
                            choosed:false
                        },
                        {
                            title:'佣金设置',
                            name:'commissionSetting',
                            href:'/home',
                            closable:true,
                            showInTags:false,
                            showInMenus:true,
                            choosed:false
                        },
                        {
                            title:'子账号管理',
                            name:'subAccount',
                            href:'/home',
                            closable:true,
                            showInTags:false,
                            showInMenus:true,
                            choosed:false
                        },
                        {
                            title:'线上入款账户管理',
                            name:'onlinePayAccount',
                            href:'/home',
                            closable:true,
                            showInTags:false,
                            showInMenus:true,
                            choosed:false
                        },
                        {
                            title:'第三方集成支付渠道',
                            name:'thirdPartyPayment',
                            href:'/home',
                            closable:true,
                            showInTags:false,
                            showInMenus:true,
                            choosed:false
                        },
                        {
                            title:'用户分销管理',
                            name:'userDistribution',
                            href:'/home',
                            closable:true,
                            showInTags:false,
                            showInMenus:true,
                            choosed:false
                        },
                        {
                            title:'IP白名单管理',
                            name:'whiteList',
                            href:'/home',
                            closable:true,
                            showInTags:false,
                            showInMenus:true,
                            choosed:false
                        },
                        {
                            title:'日志管理',
                            name:'log',
                            href:'/home',
                            closable:true,
                            showInTags:false,
                            showInMenus:true,
                            choosed:false
                        }
                    ]
                },
                {
                    title:'财务管理',
                    name:'accounting-manage',
                    icon:'ios-cash',
                    children:[
                        {
                            title:'公司入款审核',
                            name:'companyPayment',
                            href:'/home',
                            closable:true,
                            showInTags:false,
                            showInMenus:true,
                            choosed:false
                        },
                        {
                            title:'线上支付看板',
                            name:'paymentBoard',
                            href:'/home',
                            closable:true,
                            showInTags:false,
                            showInMenus:true,
                            choosed:false
                        },
                        {
                            title:'取款申请审核',
                            name:'withdrawalAudit',
                            href:'/home',
                            closable:true,
                            showInTags:false,
                            showInMenus:true,
                            choosed:false
                        },
                        {
                            title:'交易记录查询',
                            name:'transactionRecord',
                            href:'/home',
                            closable:true,
                            showInTags:false,
                            showInMenus:true,
                            choosed:false
                        },
                        {
                            title:'返水计算',
                            name:'returnWaterCal',
                            href:'/home',
                            closable:true,
                            showInTags:false,
                            showInMenus:true,
                            choosed:false
                        },
                        {
                            title:'用户分销计算',
                            name:'distributionCal',
                            href:'/home',
                            closable:true,
                            showInTags:false,
                            showInMenus:true,
                            choosed:false
                        },
                        {
                            title:'佣金计算',
                            name:'commissionCal',
                            href:'/home',
                            closable:true,
                            showInTags:false,
                            showInMenus:true,
                            choosed:false
                        },
                        {
                            title:'人工抹账',
                            name:'wipeAccounts',
                            href:'/home',
                            closable:true,
                            showInTags:false,
                            showInMenus:true,
                            choosed:false
                        }
                    ]
                },
                {
                    title:'各式报表',
                    name:'report-manage',
                    icon:'ios-stats',
                    children:[
                        {
                            title:'统计报表',
                            name:'about22',
                            href:'/home',
                            closable:true,
                            showInTags:false,
                            showInMenus:true,
                            choosed:false
                        },
                        {
                            title:'投注记录查询',
                            name:'about23',
                            href:'/home',
                            closable:true,
                            showInTags:false,
                            showInMenus:true,
                            choosed:false
                        },
                        {
                            title:'娱乐城转账记录',
                            name:'about24',
                            href:'/home',
                            closable:true,
                            showInTags:false,
                            showInMenus:true,
                            choosed:false
                        },
                        {
                            title:'总存取款汇出',
                            name:'about25',
                            href:'/home',
                            closable:true,
                            showInTags:false,
                            showInMenus:true,
                            choosed:false
                        },
                    ]
                },
                {
                    title:'前端管理设置',
                    name:'frontend-setting',
                    icon:'logo-html5',
                    children:[
                        {
                            title:'Banner设置',
                            name:'about26',
                            href:'/home',
                            closable:true,
                            showInTags:false,
                            showInMenus:true,
                            choosed:false
                        },
                        {
                            title:'顶部Icon设置',
                            name:'about27',
                            href:'/home',
                            closable:true,
                            showInTags:false,
                            showInMenus:true,
                            choosed:false
                        },
                        {
                            title:'底部Icon设置',
                            name:'about28',
                            href:'/home',
                            closable:true,
                            showInTags:false,
                            showInMenus:true,
                            choosed:false
                        }
                    ]
                },
                {
                    title:'游戏平台管理',
                    name:'game-platform-manage',
                    icon:'ios-game-controller-b',
                    children:[
                        {
                            title:'游戏平台管理',
                            name:'platform-manage',
                            href:'/home',
                            closable:true,
                            showInTags:false,
                            showInMenus:true,
                            choosed:false
                        },
                        {
                            title:'游戏管理',
                            name:'game-manage',
                            href:'/home',
                            closable:true,
                            showInTags:false,
                            showInMenus:true,
                            choosed:false
                        }                        
                    ]
                },
                {
                    title:'活动中心',
                    name:'activity-center',
                    icon:'ios-cafe',
                    children:[
                        {
                            title:'活动设置',
                            name:'about29',
                            href:'/home',
                            closable:true,
                            showInTags:false,
                            showInMenus:true,
                            choosed:false
                        },
                        {
                            title:'活动模板设置',
                            name:'about30',
                            href:'/home',
                            closable:true,
                            showInTags:false,
                            showInMenus:true,
                            choosed:false
                        },
                    ]
                },
                {
                    title:'公告管理',
                    name:'notice-manage',
                    icon:'md-volume-mute',
                    children:[
                        {
                            title:'系统公告',
                            name:'system-notice',
                            href:'/home',
                            closable:true,
                            showInTags:false,
                            showInMenus:true,
                            choosed:false
                        }
                    ]
                },
            ]
            // ------------------------------  菜单操作结束  --------------------------------
        }
    },
    computed: {
        // 筛选menus中选中的menu
        tags(){
            let tags = [];
            // 将menus中showInTags=true的标签放到tags数组中
            this.menus.forEach(menu=>{
                if(menu.showInTags){
                    tags.push(menu);
                }else if(menu.children){
                    menu.children.forEach(child=>{
                        if(child.showInTags){
                            tags.push(child)
                        }
                    })
                }
            });
            // console.log('tags=>',tags)

            //标签数组排序，从小到到
            tags.sort((a,b)=>{
                return (a.num - b.num)
            })
            return tags;
        },
        rotateIcon () {
            return [
                'menu-icon',
                this.isCollapsed ? 'rotate-icon' : ''
            ];
        },
        menuitemClasses () {
            return [
                'menu-item',
                this.isCollapsed ? 'collapsed-menu' : ''
            ]
        }
    },
    // ------------------------------  菜单操作开始  --------------------------------
    //刷新页面之后保存并选中最后一次菜单和标签
    beforeRouteEnter (to, from, next) {
        next(vm => {
            // 通过 `vm` 访问组件实例
            let activeMenuName = localStorage.activeMenuName;
            vm.activeMenuName = activeMenuName;

            let tags_last_num = vm.tags[vm.tags.length - 1].num;

            if(activeMenuName && activeMenuName.length != 0){
                vm.menus.forEach(_menu=>{
                    if(activeMenuName == _menu.name){
                        _menu.choosed = true;
                        _menu.showInTags = true;
                        _menu.num = tags_last_num + 1;
                    }
                    else if(_menu.children){
                        _menu.children.forEach(child=>{
                            if(activeMenuName == child.name){
                                child.choosed = true;
                                child.showInTags = true;
                                child.num = tags_last_num + 1;
                                vm.openMenuName = [_menu.name];
                            }
                        })
                    }
                    else{
                        // 排除首页
                        if(_menu.name != 'admin'){
                            _menu.choosed = false;
                            _menu.showInTags = false;
                        }else{
                            _menu.choosed = false;
                        }
                    }
                })
            }
            vm.$nextTick(()=>{
                // console.log(vm.$refs.side_menu, 22)
                // vm.$refs.side_menu.updateOpened();
                // vm.$refs.side_menu.updateActiveName();
            });
        })
    },
    // ------------------------------  菜单操作结束  --------------------------------
    methods: {
        /*tags 滚动事件 */
        handlescroll (e) {
            var type = e.type
            let delta = 0
            if (type === 'DOMMouseScroll' || type === 'mousewheel') {
                delta = (e.wheelDelta) ? e.wheelDelta : -(e.detail || 0) * 40
            }
            this.handleScroll(delta)
        },
        /*tags 滑动事件 */
        handleScroll (offset) {
            const outerWidth = this.$refs.scrollOuter.offsetWidth
            const bodyWidth = this.$refs.scrollBody.offsetWidth
            if (offset > 0) {
                this.tagBodyLeft = Math.min(0, this.tagBodyLeft + offset)
            } else {
                if (outerWidth < bodyWidth) {
                    if (this.tagBodyLeft < -(bodyWidth - outerWidth)) {
                        this.tagBodyLeft = this.tagBodyLeft
                    } else {
                        this.tagBodyLeft = Math.max(this.tagBodyLeft + offset, outerWidth - bodyWidth)
                    }
                } else {
                    this.tagBodyLeft = 0
                }
            }
        },
        quit(){
            this.$router.push('/login')
        },
        clickNotice(){
            this.choosedMenu('notice');
        },
        collapsedSider() {
            this.$refs.sidebar.toggleCollapse();
        },
        // ------------------------------  菜单操作开始  --------------------------------
        closeTag(event, name){
            // 判断该标签是否是选中状态
            // 如果是那么就要设置标签数组中最后一个标签成选中状态
            // 如果否那么就直接删除就好
            let is_choosed = false;
            this.menus.forEach((menu)=>{
                if(menu.name == name){
                    is_choosed = menu.choosed;
                    menu.showInTags = false;
                }else if(menu.children){
                    menu.children.forEach(child=>{
                        if(child.name == name){
                            is_choosed = child.choosed;
                            child.showInTags = false;
                        }
                    })
                }
            })
            // 关闭标签并选中tags中最后一个标签高亮
            if(is_choosed){
                let last_tag = this.tags[this.tags.length-1];
                last_tag.choosed = true;
                this.$router.push(last_tag.href);
                this.activeMenuName = last_tag.name;
                localStorage.activeMenuName = this.activeMenuName;
            }
        },
        clickTag(tag){
            this.tags.forEach(_tag=>{
                if(_tag.name == tag.name){
                    _tag.choosed=true;
                }else{
                    _tag.choosed= false;
                }
            })
            // 设置菜单选中name
            this.activeMenuName = tag.name;
            localStorage.activeMenuName = this.activeMenuName;
            // 刷新菜单
            this.$nextTick(()=>{
                if(this.$refs.side_menu){
                    this.$refs.side_menu.updateActiveName()
                }
            });
            //点击tab跳转
            this.$router.push(`${tag.href}`);
        },
        choosedMenu(name){
            // 获取标签数组最后一个元素的num
            let tags_last_num = this.tags[this.tags.length - 1].num;
            // 设置选中菜单name
            this.activeMenuName = name;
            localStorage.activeMenuName = this.activeMenuName;

            //根据name查找对应的菜单对象
            let menu = null;
            this.menus.forEach(_menu=>{
                if(_menu.name == name){
                    // 只有不在tags数组中的元素才能设置num
                    if(!_menu.showInTags){
                        _menu.num = tags_last_num + 1;
                    }
                    menu = _menu;
                    _menu.showInTags = true;
                    _menu.choosed = true;

                }
                else if(_menu.children){
                    _menu.children.forEach(child=>{
                        if(child.name == name){
                            // 只有不在tags数组中的元素才能设置num
                            if(!_menu.showInTags){
                                child.num = tags_last_num + 1;
                            }
                            menu = child;
                            child.showInTags = true;
                            child.choosed = true;

                        }else{
                            child.choosed = false;
                        }
                    })
                }
                else {
                    _menu.choosed = false;
                }
            })
            this.$router.push(`${menu.href}`);
        },
        dropdownClick(name){
            this.choosedMenu(name);
        }
        // ------------------------------  菜单操作结束  --------------------------------
    }
}
</script>
