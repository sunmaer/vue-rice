<template>
  <div class="mod_recongnition">
    <div class="recongnition_banner">
      <div class="banner_mask"></div>
      <div class="banner_content">
        <div class="content_head">
          <span> <i class="fa fa-camera"></i> 水稻病害识别</span>
          <p>{{ user }}
            <span @click="logout" class="logout">退出登录</span>
          </p>
        </div>
        <div class="content_middle">
          <h1 class="tit">水稻病害 智能识别</h1>
          <el-upload
            class="upload"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :multiple="false">
            <el-button size="medium">开始识别</el-button>
          </el-upload>
        </div>
      </div>
    </div>
    <div class="recongnition_intro">
      <div class="intro">
        <img @click="intro('first')" src="//timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527405047360&di=ff807de543604929b351fc900f785001&imgtype=0&src=http%3A%2F%2Fwww.my478.com%2Fpic%2F20131227112232240.jpg" alt="稻瘟病介绍">
        <p><span @click="intro('first')">稻瘟病介绍</span></p>
      </div>
      <div class="intro">
        <img @click="intro('second')" src="//timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527405103702&di=ad1bf0bd5dbdfc592c88cb59d126080a&imgtype=0&src=http%3A%2F%2Fagronews.fftc.org.tw%2Fupload%2Fimages%2Fch%2Fch_agric_news%2F20151027101551%2F2.jpg" alt="白叶枯介绍">
        <p><span @click="intro('second')">白叶枯介绍</span></p>
      </div>
      <div class="intro">
        <img @click="intro('third')" src="//timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527405153047&di=4a9914210e870f5006121366e49b66f4&imgtype=0&src=http%3A%2F%2Fwww.em598.com%2Fupload%2Fimage%2F20160526%2F6359987727108462534526732.jpg" alt="纹枯病介绍">
        <p><span @click="intro('third')">纹枯病介绍</span></p>
      </div>
    </div>
    <div class="recongnition_text">
      <el-tabs v-model="name" @tab-click="handleClick">
        <el-tab-pane label="稻瘟病" name="first">
          &nbsp;&nbsp;&nbsp;&nbsp;病菌以分生孢子和菌丝体在稻草和稻谷上越冬。翌年产生分生孢子借风雨传播到稻株上，萌发侵入寄主向邻近细胞扩展发病，形成中心病株。病部形成的分生孢子，借风雨传播进行再侵染。播种带菌种子可引起苗瘟。适温高湿，有雨、雾、露存在条件下有利于发病。菌丝生长温限在8～37℃范围，最适温度26～28℃。孢子形成温限在10～35℃范围，以25～28℃最适，相对湿度90%以上。孢子萌发需有水存在并持续6～8小时。适宜温度才能形成附着胞并产生侵入丝，穿透稻株表皮，在细胞间蔓延摄取养分。阴雨连绵，日照不足或时晴时雨，或早晚有云雾或结露条件，病情扩展迅速。品种抗性因地区、季节、种植年限和生理小种不同而异。籼型品种一般优于粳型品种。同一品种在不同生育期抗性表现也不同，秧苗4叶期、分蘖期和抽穗期易感病，圆秆期发病轻，同一器官或组织在组织幼嫩期发病重。穗期以始穗时抗病性弱。偏施过施氮肥有利发病。放水早或长期深灌根系发育差，抗病力弱发病重。<br>                                                                                 
          &nbsp;&nbsp;&nbsp;&nbsp;稻瘟病是真菌寄生引起，青灰色霉即是病菌的分生孢子，病害的扩展靠分生孢子在空气中传播。病菌发育最适温病为25℃～28℃，高湿有利分生孢子形成飞散和萌发，而高湿度持续达一昼夜以上，则有利于病害发生流行。<br>
          &nbsp;&nbsp;&nbsp;&nbsp;由此可见稻瘟病的真菌在相对湿度90%以上适宜生存，此时水稻容易感染稻瘟病。
        </el-tab-pane>
        <el-tab-pane label="白叶枯" name="second">
          &nbsp;&nbsp;&nbsp;&nbsp;该病是由细菌引起的，病原菌为水稻黄单胞菌（Xanthomonasoryzae）。初侵染源主要是病草和病谷，细菌经水流传播到秧田，引起秧苗发病。早稻秧苗感染后往往不表现症状，成为带菌苗。晚稻在三四叶期就可表现症状。秧田期淹水，秧苗期淹水，秧苗被感染的机会增多，淹水没顶次数越多，时间越长，秧苗带菌率越高。当带菌苗或显症状的秧苗移栽到大田后，到分蘖末期稻株抗病力降时开始发病，成为中心病株。以后又在病株的病部产生大量的菌脓，借灌水和暴风雨传播，不断进行再侵染，使病害在田间不断扩大蔓延。<br>
          &nbsp;&nbsp;&nbsp;&nbsp;台风保育或洪涝灾害容易造成白叶枯病暴发流行。偏施氮肥，深水灌溉，特别是受淹的情况下发病严重。受淹时间越长，次数越多，发病越重。串灌、谩灌致使病原菌随水流传播，扩大危害。品种之间的抗病差异明显。稻株抗病力一般在分蘖末期开始下降，孕穗、抽穗阶段最易感病。气温在26-30°C，相对湿度在90%，多雨、日照不足、风速大的气候条件下，都有利于病害的发生流行。<br>
          &nbsp;&nbsp;&nbsp;&nbsp;由此可见水稻白叶枯病的细菌在相对湿度90%时适宜生存，此时水稻容易感染水稻白叶枯病。
        </el-tab-pane>
        <el-tab-pane label="纹枯病" name="third">
          &nbsp;&nbsp;&nbsp;&nbsp;病菌主要以菌核在土壤中越冬，也能以菌丝体在病残体上或在田间杂草等其它寄主上越冬。翌春春灌时菌核飘浮于水面与其它杂物混在一起，插秧后菌核粘附于稻株近水面的叶鞘上，条件适宜生出菌丝侵入叶鞘组织为害，气生菌丝又侵染邻近植株。水稻拔节期病情开始激增，病害向横向、纵向扩展，抽穗前以叶鞘为害为主，抽穗后向叶片、穗颈部扩展。早期落入水中菌核也可引发稻株再侵染。早稻菌核是晚稻纹枯病的主要侵染源。菌核数量是引起发病的主要原因。每667m2有6万粒以上菌核，遇适宜条件就可引发纹枯病流行。高温高湿是发病的另一主要因素。气温18-34℃都可发生，以22-28℃最适。发病相对湿度70%-96%，90%以上最适。菌丝生长温限10-38℃，菌核在12-40℃都能形成，菌核形成最适温度28-32℃。相对湿度95%以上时，菌核就可萌发形成菌丝。6-10天后又可形成新的菌核。日光能抑制菌丝生长促进菌核的形成。水稻纹枯病适宜在高温、高湿条件下发生和流行。生长前期雨日多、湿度大、气温偏低，病情扩展缓慢，中后期湿度大、气温高，病情迅速扩展，后期高温干燥抑制了病情。气温20℃以让，相对湿度大于90%，纹枯病开始发生，气温在28-32℃，遇连续降雨，病害发展迅速。气温降至20℃以下，田间相对湿度小于85%，发病迟缓或停止发病。长期深灌，偏施、迟施氮肥，水稻郁闭，徒长促进纹枯病发生和蔓延。<br>
          &nbsp;&nbsp;&nbsp;&nbsp;由此可见纹枯病的病菌在相对湿度70%—96%之间适宜生存，此时水稻容易感染纹枯病。
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="foot">
      © 2018 sunmaer 版权所有
    </div>
  </div>
</template>

<script>
  import { LOGIN } from '@/store/store'
  export default {
    data() {
      return {
        user: '',
        name: 'first'
      }
    },
    created () {
      this.user = this.$store.state.user
    },
    methods: {
      intro(name) {
        this.name = name
      },
      // 退出登录
      logout() {
        this.$confirm('是否确定退出登录?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          location.reload()
        }).catch(() => {})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .mod_recongnition {
    .recongnition_banner {
      position: relative;
      width: 100%;
      height: 600px;
      background-image: url('../../assets/banner.jpg');
      background-size: cover;
      .banner_mask {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.2);
      }
      .banner_content {
        position: relative;
        .content_head {
          display: flex;
          justify-content: space-between;
          padding: 30px;
          color: #fff;
          font-size: 16px;
          .logout {
            cursor: pointer;
            &:hover {
              color: #409EFF;
            }
          }
        }
        .content_middle {
          margin-top: 100px;
          color: #fff;
          text-align: center;
          .tit {
            font-size: 40px;
            font-weight: normal;
          }
          .upload {
            margin-top: 40px;
            .el-button {
              padding: 15px 35px;
              font-size: 18px;
              color: #fff;
              border: 2px solid #fff;
              border-radius: 0; 
              background-color: transparent;
              &:hover {
                color: #409EFF;
                border: 2px solid #409EFF;
              }
            }
          }
        }
      }
    }
    .recongnition_intro {
      margin: 20px 0;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      .intro {
        overflow: hidden;
        position: relative;
        width: 32%;
        height: 250px;
        text-align: center;
        img {
          width: 100%;
          height: 100%;
          cursor: pointer;
          &:hover {
            transform: scale(1.2);
            transition-duration: 500ms;
          }
        }
        p {
          position: absolute;
          width: 100%;
          bottom: 15px;
          text-align: center;
          span {
            font-weight: bold;
            color: #fff;
            cursor: pointer;
          }
        }
      }
    }
    .recongnition_text {
      padding: 0 20px;
      line-height: 30px;
      color: #333;
    }
    .foot {
      line-height: 60px;
      color: #999;
      font-size: 13px;
      text-align: center;
    }
  }
</style>