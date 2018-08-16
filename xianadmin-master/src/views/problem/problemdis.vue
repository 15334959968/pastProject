<template>
    <el-container class="problemdis-page">
            <div class="form-textarea-back">
               <div class="form-textarea">
                   <el-input class="form-textarea" placeholder="说点啥" type="textarea" v-model="form.text"></el-input>
                   <div class="form-text-icon">
                       <div class="form-text-icon-left">
                           <el-upload
                                   action="https://jsonplaceholder.typicode.com/posts/"
                                   list-type="picture-card"
                                   :on-preview="handlePictureCardPreview"
                                   :on-remove="handleRemove">
                               <i class="el-icon-document"></i>
                           </el-upload>
                           <el-dialog :visible.sync="dialogVisible">
                               <img width="100%" :src="dialogImageUrl" alt="">
                           </el-dialog>
                       </div>
                       <div class="form-text-icon-right">
                           <span>（0/10000）</span>
                           <span class="submit">发布</span>
                       </div>
                   </div>
               </div>
                <div class="form-body">
                    <div class="form-body-header">
                        全部讨论内容
                    </div>
                    <div class="form-body-item" v-for="(item,index) in list">
                       <div class="form-body-item-user">
                           <div class="form-body-item-icon">
                               <img class="user-icon" src="https://file.zsxq.com/1f3/50/f350b674822fab435b1ab1e71db00190e94933599967d1b7b48a23b24f69aac7.jpg" alt="">
                           </div>
                           <div class="form-body-user-menage">
                               <p>西岸管理员</p>
                               <p>2小时前</p>
                           </div>
                       </div>
                        <div class="form-body-item-menage">1、受力钢筋混凝土保护层厚度应符合设计要求，如设计无具体要求时，不应少于受力钢筋直径，并符合现行的混凝土质量验收规范的规定。2、用1：2水泥砂浆制作垫块，对成型的垫块认真养护，确保垫块强度达到要求，在使用过程中不被钢筋压碎。3、垫块按1m左右的间距放置，绑扎在受力钢筋上。在抗渗混凝土施工中，要采取相应措施
                        </div>
                        <div class="form-body-item-images">
                            <img src="http://img95.699pic.com/photo/50013/8832.jpg_wh300.jpg" alt="">
                            <img src="http://img95.699pic.com/photo/50051/1574.jpg_wh300.jpg" alt="">
                            <img src="http://img95.699pic.com/photo/50087/0832.jpg_wh300.jpg" alt="">
                            <img src="http://img95.699pic.com/photo/50074/3033.jpg_wh300.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-acmenage">
                <div>
                    <img class="ac-image" src="http://img95.699pic.com/photo/50071/5544.jpg_wh300.jpg" alt="">
                </div>
                <div class="ac-menages">
                    <p class="ac-title">关于G垫块基垫问题的讨论</p>
                    <p class="ac-menage">
                        1. 电源引入的方向，位置是否合适，图上有无注明。

                        2. 配电箱的位置是否合适，是否便于维修和操作。

                        3. 电力配电系统是否考虑了生产工艺，防火分区等。

                        4. 管线穿越楼板、墙及暗装配电箱等是否留洞，穿外墙时的防水是否解决。

                        5. 控制线路在平面图里是否已有表示、管线规格有无遗漏现象。

                        6. 配电箱的型号、容量、编号、代号及安装高度等是否均已注明。

                        7. 用电设备的编号、容量及安装高度是否均已注明。

                        8. 单相负荷的三相分配是否平衡。

                        9. 要不要降压起动，是否影响其他设备的运行。
                    </p>
                    <p class="ac-p">
                        问题创建人:
                        <span>西岸管理员</span>
                    </p >
                    <p class="ac-p">
                        问题创建时间:
                        <span>2018-07-09 12:20</span>
                    </p>
                    <p class="ac-p">
                        问题状态:
                        <span class="ac-start">待处理</span>
                    </p>
                    <p class="ac-lables">问题标签:
                        <span class="ac-lable">质量问题</span>
                        <span class="ac-lable">设计问题</span>
                        <span class="ac-lable">产品问题</span>
                    </p>
                </div>
            </div>
    </el-container>
</template>
<script>


    export default {
        data () {
            return {
                dialogImageUrl: '',
                dialogVisible: false,
                imageUrl: '',
                list:new Array(10),
                form:"text"
            }
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            }
        },
        mounted () {

        },
        components: {
        }
    }
</script>

<style lang="scss">
    .problemdis-page{
        background-color: #f5f8fa;
        padding: 20px;
        .el-upload--picture-card{
            width: 60px;
            height: 60px;
            line-height: 60px;
            margin-left:10px;
        }
    }
    .form-textarea-back{
        width: 55%;
        height: fit-content;
        background: #f5f8fa;
        .upload-demo{
            margin-left: 10px;
        }
        .form-textarea{
            border-radius: 3px;
            padding: 10px;
            background-color: #fff;
            .el-textarea__inner{
                padding: 10px ;
                height: 95px;
                line-height: 95px;
                overflow: hidden;
            }
            .form-text-icon{
                padding-top: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                .form-text-icon-left{
                    display: inline-flex;
                    text-align: left;
                    flex: 1;
                    icon{
                        font-size: 20px;
                    }
                }
                .form-text-icon-right{
                    display: inline-flex;
                    flex: 1;
                    text-align: right;
                    justify-content: flex-end;
                    .submit{
                        cursor: pointer;
                        color: #fff;
                        background: #16b998;
                        width: 55px;
                        height: 24px;
                        border: none;
                        float: right;
                        font-size: 14px;
                        text-align: center;
                        padding-top: 2px;
                    }
                }
            }
        }
        .form-body{
            height: auto;
            margin: 30px auto auto auto;
            background-color: #fff;
            .form-body-header{
                padding: 0 30px;
                text-align: left;
                font-size: 15px;
                font-weight: 700;
                border-bottom: 1px solid #dcdfe1;
                border-top-left-radius: 4px;
                border-top-right-radius: 4px;
                height: 45px;
                line-height: 45px;
            }
            .form-body-item{
                background-color: #fff;
                padding: 30px 30px 10px 30px;
                .form-body-item-user{
                    display: flex;
                    .user-icon{
                        display: inline-block;
                        width: 50px;
                        height: 50px;
                        background: #e5e5e5;
                        border-radius: 2px;
                    }
                    .form-body-user-menage{
                        padding: 7px;
                    }
                }
                .form-body-item-menage{
                    line-height: 24px;
                    font-size: 14px;
                    white-space: pre-wrap;
                    max-height: 156px;
                    overflow: hidden;
                    margin-left: 67px   ;
                }
                .form-body-item-images{
                    margin-left: 67px   ;
                    img{
                        height: 154.406px;
                        width: 154.406px;
                    }
                }
            }
        }
    }
    .form-acmenage{
        box-shadow: 0px 2px 4px #e8eaec;
        background: #fff;
        border: 1px solid #dcdfe1;
        width: 20%;
        margin-left:40px;
        .ac-p{
            padding: 5px 0px 0px 0px ;
            span{
                margin-left: 10px;
            }
        }
        .ac-start{
            background: #FF5722;
            border-radius: 14px;
            word-wrap: break-word;
            white-space: nowrap;
            margin-left: 2px;
            color: #fff;
            padding: 3px 10px;
            font-size: 12px;
        }
        .ac-menages{
            padding: 10px 15px;
            font-size: 14px;
        }
        .ac-image{
            width: 100% ;
            height: 200px;
        }
        .ac-title{
            font-size: 15px;
            font-weight: 700;
        }
        .ac-menage{
            display: -webkit-box;
            -webkit-line-clamp:2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
        .ac-lables{
            font-size: 14px;
            margin-top: 10px;
            .ac-lable{
                font-size: 12px;
                display: inline;
                padding: 3px 10px;
                background: #999999;
                border-radius: 14px;
                word-wrap: break-word;
                white-space: nowrap;
                margin-left: 2px;
                color: #fff;
            }
        }
    }


</style>
