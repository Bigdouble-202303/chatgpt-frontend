const app = getApp();

Page({
  data: {
    inputMessage: '',
    outputMessage: '',
  },

  handleInputMessage(e) {
    this.setData({ inputMessage: e.detail.value });
  },

  async handleSendMessage() {
    const { inputMessage } = this.data;

    wx.request({
      url: 'http://3.112.190.158/:5000/api/gpt',
      method: 'POST',
      data: { message: inputMessage },
      success: (res) => {
        const { data } = res;
        this.setData({ outputMessage: data });
      },
      fail: (err) => {
        console.error(err);
      },
    });
  },
});

