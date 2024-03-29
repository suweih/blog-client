import marked from 'marked'
import blog from '../../api/blog'

export default {
    data () {
      return {
        title:'',
        user:{},
        rawContent:'',
        createdAt:''
      }
    },
    created(){
      this.blogId = this.$route.params.blogId
      blog.getDetail({ blogId : this.blogId }).then(res=>{
        this.title = res.data.title
        this.user = res.data.user
        this.rawContent = res.data.content
        this.createdAt = res.data.createdAt
      })
    },
    computed:{
      markdown(){
        return marked(this.rawContent)
      }
    }
  }