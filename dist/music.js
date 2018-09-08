const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "Lemmon",
        artist: '米津玄师',
        url: 'https://m10.music.126.net/20180908173054/7d6b2c1a8695a99641139adf06e0f2f4/ymusic/6eed/4ef2/d8ae/b85b958a70552f7e002e33d35075086c.mp3',
        cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536406773548&di=6cac2da9cdacdd182a6473e4d11555a9&imgtype=0&src=http%3A%2F%2Foss.tan8.com%2Fyuepuku%2F118%2F59343%2F59343_prev.jpg%3Fv%3D1524962090',
      },
      {
        name: '葬仙',
        artist: '叶里 / 苑舍',
        url: 'https://m10.music.126.net/20180908171206/a67e219b35ed7ade346ade1efe69b229/ymusic/9483/730b/e865/e6d9b63fc979ee4bfda6844de98d77f9.mp3',
        cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537001555&di=04b103eb86005991468710945617b85f&imgtype=jpg&er=1&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Farchive%2Fbcfaa374b56588fe3b241e4cec959532b75a4116.png',
      },
      {
        name: '风筝误',
        artist: '刘珂矣',
        url: 'http://up.mcyt.net/?down/46644.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/96.jpg',
      }
    ]
});