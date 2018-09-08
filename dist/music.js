const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "Lemmon",
        artist: '米津玄师',
        url: 'http://isure.stream.qqmusic.qq.com/C400000akynZ2Rbro5.m4a?vkey=667DDD515A8BE7D766D642C2075530C84B9E0DDDADF0C17B7C221734C310BF131C83E03311433C309D33237475F7A209A756FB9B1F94DE9B&guid=6172684334&uin=3012234939&fromtag=66',
        cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536406773548&di=6cac2da9cdacdd182a6473e4d11555a9&imgtype=0&src=http%3A%2F%2Foss.tan8.com%2Fyuepuku%2F118%2F59343%2F59343_prev.jpg%3Fv%3D1524962090',
      },
      {
        name: '葬仙',
        artist: '叶里 / 苑舍',
        url: 'http://isure.stream.qqmusic.qq.com/C400002qIzSP0fxyG9.m4a?vkey=07FC6BBD9FDB83CE94EBBBD7934D2C5356071052AA55431B68421B968F8E125E60EB074006E376FCCF79107AF0494393E4ADC4501D071143&guid=6172684334&uin=3012234939&fromtag=66',
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