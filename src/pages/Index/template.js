import request from '@/helpers/request.js';
import auth from '@/api/auth.js';
import blog from '@/api/blog.js'

window.request = request
window.auth = auth
window.blog = blog

export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods : {
      onClick1(){
        this.$notify({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'success'
        });
      },
      onClick2(){
        this.$alert('这是一段内容', 'alert提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$notify({
              title: '成功',
              message: '这是一条成功的提示消息',
              type: 'success'
            });
          }
        });
      }
    }
  }