new Vue({
  el: "#app",
  data: {
    products: [
      {
        id: "0",
        title: "Sony RX100 VII",
        category: "Sony RX-series,Discount,BC",
        content:
          "雖然 RX100 VII 機身輕巧，卻內建拍攝優質影像所需的一切功能。24 至 200 mm1 變焦鏡頭搭配 0.02 秒2 的超快速自動對焦、全新的即時追蹤與即時眼部偵測自動對焦功能，外加經過強化的影像穩定系統與外接麥克風插孔，可支援拍攝高品質影片。高放大倍率的 24 至 200 mm1 變焦鏡頭可提供卓越影像品質。可橫跨完整焦段，達到最高解析度與清晰度，雖然機身採袖珍型設計，但仍提供優異的望遠功能，大幅拓展您的創意表現力。",
        description: "RX100 VII 輕巧相機提供無與倫比的自動對焦功能",
        imageUrl: [
          "https://images.unsplash.com/photo-1471293413508-2cb95f2d2e9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1212&q=80",
          "https://images.unsplash.com/photo-1553456070-ab6e39f8b729?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        ],
        is_enabled: true,
        origin_price: 37980,
        price: 35000,
        unit: "台",
        options: {
          feature: [
            "廣焦段與卓越速度性能",
            "輕巧機身搭載寬廣變焦功能",
            "可靠的自動對焦主體追蹤功能",
            "寬廣的自動對焦範圍與快速的自動對焦速度",
            "可捕捉動態主體的即時追蹤功能",
            "優異影像品質",
          ],
          comments: [
            {
              rate: 4.5,
              comment: "夠小台，該有的功能都有，錄影功能超讚der，youtuber必備款",
              user: "入門級Youtuber小明",
            },
          ],
        },
      },
      {
        id: "1",
        title: "佳能 Canon EOS 6D MARKII",
        category: "Canon EOS-series,HotSale,DLSR",
        content:
          "全球最輕*配備多角度觸控式螢幕的全片幅數位單眼相機EOS 6D Mark II，繼承上一代EOS 6D輕巧、高畫質、結合強大拍攝能力等備受讚譽的優良特點，採用像素更高的全新2,620萬像素全片幅CMOS影像感測器，提供直逼旗艦級機種的ISO 100-40000標準感光度範圍，更加入備受好評的45點全十字型自動對焦感應器及「雙像素CMOS自動對焦」(DAF) 技術，進一步加強使用觀景窗及即時顯示拍攝時的自動對焦能力",
        description: "佳能 Canon EOS 6D MARKII",
        imageUrl: [
          "https://images.unsplash.com/photo-1497617226900-8e7fc1873e25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        ],
        is_enabled: true,
        origin_price: 49000,
        price: 45000,
        unit: "台",
        options: {
          feature: [
            "全新2,620萬全片幅影像感應器，標準感光度高達 ISO 40000",
            "兩種先進自動對焦系統對應不同場景及主體",
            "雙像素CMOS自動對焦及支援4K UHD縮時短片拍攝，短片拍攝更具創意",
            "源自專業EOS型號的操控性",
            "全球最輕 配備多角度LCD 螢幕35mm全片幅數位單眼相機",
            "內建Wi-Fi 、NFC、低耗電藍牙技術及GPS定位功能",
          ],
          comments: [
            {
              rate: 5,
              comment: "DLSR入門款必備相機!!!! 沒用過就輸了",
              user: "小菜鳥",
            },
            {
              rate: 5,
              comment: "這價格CP搭配活動好殺~~~~",
              user: "CP王",
            },
          ],
        },
      },
      {
        id: "2",
        title: "徠卡 Leica M10",
        category: "Leica,New",
        content:
          "自1954年徠卡M3在科隆世界影像博覽會發佈以來，每一部M系統相機都代表著當時的革新高峰，並被定義為攝影必備。徠卡始終保持著對品質、工藝及攝影理念的熱情和追求。<br />擁有超過60年的旁軸專業技術，11年的數位化發展以及攝影師們對M系統相機的寶貴回饋激勵了徠卡工程師們製造出前所未有纖薄的M數碼相機：徠卡M10。<br />融合了歷史傳承以及技術革新，體現了對攝影而言至關重要的一切。更方便攜的尺寸、優化的性能以及位於頂板的全新ISO感光度撥盤可提供使用M系統攝影師所有的期盼。",
        imageUrl: [
          "https://images.unsplash.com/photo-1525584852662-9605341eb9c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          "https://images.unsplash.com/photo-1521710153413-ea687d2ca2c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        ],
        is_enabled: false,
        origin_price: 128800,
        price: 128800,
        unit: "台",
        options: {
          feature: [
            "如M膠片相機般輕便",
            "ISO轉盤",
            "擴展的ISO範圍",
            "簡約操作概念",
            "改進的取景器使您看得更多",
            "快速連續拍攝",
          ],
          comments: [
            {
              rate: 5,
              comment: "LEICA 信仰充值!! M10好看又好用!身為一個專業宅宅，一定要擁有一台",
              user: "專業宅宅",
            },
            {
              rate: 5,
              comment: "這不是傳說中的相機界的LV嗎!!用起來94爽",
              user: "土豪阿忠",
            },
            {
              rate: 5,
              comment: "搭配大三元，走到哪拍到哪，輕便、有型、潮到有妹子跟你搭訕~~",
              user: "94潮男",
            },
          ],
        },
      },
    ],
    tempProduct: {
      options: {
        comments: [
          {
            rate: "",
            comment: "",
            user: "",
          },
        ],
      },
    },
  },
  methods: {
    openModal(isNew, item) {
      switch (isNew) {
        case "new":
          this.tempProduct = {
            options: {
              comments: [
                {
                  rate: "",
                  comment: "",
                  user: "",
                },
              ],
            },
          };

          this.tempProduct.isNew = true;
          $("#productModal").modal("show");
          break;
        case "edit":
          this.tempProduct = JSON.parse(JSON.stringify(item));
          this.tempProduct.isNew = false;
          $("#productModal").modal("show");
          break;
        case "delete":
          this.tempProduct = JSON.parse(JSON.stringify(item));
          $("#delProductModal").modal("show");
          break;
        case "review":
          this.tempProduct = JSON.parse(JSON.stringify(item));
          $("#reviewProductModal").modal("show");
          break;
      }
    },
    updateProduct() {
      const vm = this;
      if (vm.tempProduct.isNew) {
        const id = new Date().getTime();
        vm.tempProduct.id = id;
        vm.products.push(vm.tempProduct);
      } else {
        const id = vm.tempProduct.id;
        vm.products.forEach((product, i) => {
          if (product.id === id) {
            vm.$set(vm.products, i, vm.tempProduct);
          }
        });
      }
      // vm.tempProduct = {};

      $("#productModal").modal("hide");
    },
    delProduct() {
      const vm = this;
      const id = vm.tempProduct.id;

      vm.products.forEach((product, i) => {
        if (product.id === id) {
          vm.products.splice(i, 1);
        }
      });

      vm.tempProduct = {
        options: {
          comments: [
            {
              rate: "",
              comment: "",
              user: "",
            },
          ],
        },
      };
      $("#delProductModal").modal("hide");
    },
  },
});
