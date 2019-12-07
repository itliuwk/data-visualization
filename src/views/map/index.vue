<template>
    <div class="map-content">
        <div id="container" class="map" tabindex="0"></div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                msg: "index",
                markers: [],
                points: [],
                map: null,
                infoWindow: null,
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                this.map = new AMap.Map("container", {
                    resizeEnable: true,
                    center: [113.270692, 23.136104],
                    zoom: 10
                });
                this.points = [
                    {"lnglat": ["113.864691", "22.942327"]}, {"lnglat": ["113.370643", "22.938827"]}, {"lnglat": ["112.985037", "23.15046"]}
                ];

                for (var i = 0; i < this.points.length; i += 1) {

                    this.markers.push(new AMap.Marker({
                        position: this.points[i]['lnglat'],
                        offset: new AMap.Pixel(-15, -15)
                    }))


                    // // 给标记加一个点击事件，传入对应的参数
                    // this.markers.on('click', function (e) {
                    //     console.log(e);
                    // });
                }


                //  初始化
                new AMap.MarkerClusterer(this.map, this.markers, {
                    gridSize: 80,
                });




                //实例化信息窗体
                let title = '方恒假日酒店<span style="font-size:11px;color:#F00;">价格:318</span>',
                    content = [];
                content.push("<img src='http://tpc.googlesyndication.com/simgad/5843493769827749134'>地址：北京市朝阳区阜通东大街6号院3号楼东北8.3公里");
                content.push("电话：010-64733333");
                content.push("<a href='https://ditu.amap.com/detail/B000A8URXB?citycode=110105'>详细信息</a>");

                this.infoWindow = new AMap.InfoWindow({
                    isCustom: true,  //使用自定义窗体
                    content: this.createInfoWindow(title, content.join("<br/>")),
                    offset: new AMap.Pixel(16, -45)
                });
            },
            currMark(el) {
                let marker = el.getAttribute('data-info').split(',');

                let obj = {
                    P: parseFloat(marker[1]),
                    Q: parseFloat(marker[0]),
                    lat: parseFloat(marker[1]),
                    lng: parseFloat(marker[0]),
                };
                //  打开信息窗体
                this.infoWindow.open(this.map, obj);
            },
            createInfoWindow(title, content) {
                let info = document.createElement("div");
                info.className = "custom-info input-card content-window-card";

                //可以通过下面的方式修改自定义窗体的宽高
                //info.style.width = "400px";
                // 定义顶部标题
                let top = document.createElement("div");
                let titleD = document.createElement("div");
                let closeX = document.createElement("img");
                top.className = "info-top";
                titleD.innerHTML = title;
                closeX.src = "https://webapi.amap.com/images/close2.gif";
                closeX.onclick = this.closeInfoWindow();

                top.appendChild(titleD);
                top.appendChild(closeX);
                info.appendChild(top);

                // 定义中部内容
                let middle = document.createElement("div");
                middle.className = "info-middle";
                middle.style.backgroundColor = 'white';
                middle.innerHTML = content;
                info.appendChild(middle);

                // 定义底部内容
                let bottom = document.createElement("div");
                bottom.className = "info-bottom";
                bottom.style.position = 'relative';
                bottom.style.top = '0px';
                bottom.style.margin = '0 auto';
                let sharp = document.createElement("img");
                sharp.src = "https://webapi.amap.com/images/sharp.png";
                bottom.appendChild(sharp);
                info.appendChild(bottom);
                return info;
            },
            closeInfoWindow() {
                this.map.clearInfoWindow();
            }
        }
    }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>

    #container {
        width: 100%;
        height: 320px;
    }


    .input-card .btn:last-child {
        margin-right: 0;
    }

    .content-window-card {
        position: relative;
        box-shadow: none;
        bottom: 0;
        left: 0;
        width: auto;
        padding: 0;
    }

    .content-window-card p {
        height: 2rem;
    }

    .custom-info {
        border: solid 1px silver;
    }

    div.info-top {
        position: relative;
        background: none repeat scroll 0 0 #F9F9F9;
        border-bottom: 1px solid #CCC;
        border-radius: 5px 5px 0 0;
    }

    div.info-top div {
        display: inline-block;
        color: #333333;
        font-size: 14px;
        font-weight: bold;
        line-height: 31px;
        padding: 0 10px;
    }

    div.info-top img {
        position: absolute;
        top: 10px;
        right: 10px;
        transition-duration: 0.25s;
    }

    div.info-top img:hover {
        box-shadow: 0px 0px 5px #000;
    }

    div.info-middle {
        font-size: 12px;
        padding: 10px 6px;
        line-height: 20px;
    }

    div.info-bottom {
        height: 0px;
        width: 100%;
        clear: both;
        text-align: center;
    }

    div.info-bottom img {
        position: relative;
        z-index: 104;
    }

    span {
        margin-left: 5px;
        font-size: 11px;
    }

    .info-middle img {
        float: left;
        margin-right: 6px;
    }

    /deep/ .amap-logo, /deep/ .amap-copyright {
        display: none !important;
    }
</style>
