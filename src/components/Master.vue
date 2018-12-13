<style lang="postcss" scoped>
.master-page-container{
    background-color: #fff;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .2);
    & .master-page-wrap{
        & .title-header{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding:10px 15px;
            border-bottom: 1px solid #dddee1;
            & .title-content{
                display: flex;
                align-items: center;
                & .title-icon{
                    display: flex;
                    align-items: center;
                    margin-right:5px;
                }
                & p.title{
                    font-size: 14px;
                    font-weight: bold;
                }
            }
            & .title-toolbar{

            }
        }        
        & .master-page-search-content{
            padding: 15px;
            padding-bottom: 0;          
        }
        & .master-page-content-toolbar{
            padding: 15px;          
            padding-bottom: 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            // border-bottom:1px solid #dddee1;
            & .bar-search{
                &.input-search{
                    width:350px;
                }
            }
            & .bar-group{
                
            }
        }
        & .master-page-padding-content{
            padding:15px;
            background: #fff;
            padding-bottom: 0;
        }
        & .master-page-nopadding-content{
            padding-bottom: 0;
            background: #fff;
            padding-left: 18px;
        }
        & .page-wrapper{
            padding:15px;
            display: flex;
            width: 100%;
            justify-content: flex-end;
        }
    }
}
</style>
<template>
<section class="master-page-container">
    <div class="master-page-wrap">
        <div class="title-header" v-if="title">
            <div class="title-content">
                <div class="title-icon">
                    <slot name="title-icon"></slot>
                </div>
                <p class="title">{{title}}</p>
            </div>
            <div class="title-toolbar">
                <slot name="title-toolbar"></slot>
            </div>
        </div>
        <div class="master-page-search-content" v-if="$slots.searchContent">
            <slot name="searchContent"></slot>
        </div>
        <div class="master-page-content-toolbar" v-if="$slots.search || $slots.btns">
            <div class="bar-search">
                <slot name="search"></slot>
            </div>
            <div class="bar-group">
                <slot name="btns"></slot>
            </div>
        </div>
        <!--$slots.content表示$slots里面是否存在content内容，就是说这里的占位符可填充了内容-->
        <div class="master-page-padding-content" v-if="$slots.paddingContent">
            <slot name="paddingContent"></slot>
        </div>
        <div class="master-page-nopadding-content" v-if="$slots.content">
            <slot name="content"></slot>
        </div>
        <div class="page-wrapper">
            <slot name="pager"/>
        </div>
    </div>
</section>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    props:{
        title:{
            type:String
        }
    },
    mounted(){
        console.log('paddingContent=',this.$slots)
    },
    methods:{

    }
}
</script>
