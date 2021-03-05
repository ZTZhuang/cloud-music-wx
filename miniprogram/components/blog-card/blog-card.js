import formatTime from "../../utils/formatTime"
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    blog: Object
  },

  observers: {
    [`blog.createTime`](val) {
      if (val) {
        this.setData({
          _createTime:  formatTime(new Date(val))
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    _createTime: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPreviewImage(event) {
      wx.previewImage({
        urls: this.data.blog.img,
        current: event.target.dataset.src
      })
    }
  }
})