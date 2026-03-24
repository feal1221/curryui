<template>
  <curry-bar />
  <div
    class="flex flex-col justify-center items-center gap-4 mt-4 bg-[var(--bg-yellow)] min-h-screen pt-16"
  >
    <!-- 活動測驗 -->
    <section class="bg-[#F09020] w-full min-h-[730px] sm:min-h-[820px] relative overflow-hidden" id="test">
      <img
        src="/assets/images/bg-yellow.png"
        class="absolute top-24 left-1/2 -translate-x-1/2 w-[933px] sm:-top-24 sm:w-[1953px] h-auto max-w-none"
      />
      <img src="/assets/images/veg.png" class="hidden sm:block w-[90vw] absolute z-20 top-6 left-2 w-22 sm:w-auto sm:top-[1%] sm:left-[6%]" />
      <img src="/assets/images/vegPhone.png" class="block absolute sm:hidden w-[95vw] max-w-[352px] left-1/2 top-[-1%] -translate-x-1/2 z-2 " />
      
      <img
        src="/assets/images/top-title.png"
        class="left-1/2 -translate-x-1/2 absolute top-58 sm:top-32 w-[95vw] max-w-[680px] md:w-auto z-30"
      />
            <img
        src="/assets/images/Rectangle-1.png"
        class="absolute z-20 top-[20%] left-[64%] w-29 sm:w-40 lg:w-auto sm:top-[5%] lg:top-[5%] xl:top-[20%] sm:left-[70%] lg:left-[76%] xl:left-[80%] pr-1"
      />
      <img
        src="/assets/images/Rectangle.png"
        class="absolute z-20 top-[12%] left-[34%] w-29 sm:w-40 lg:w-auto sm:top-[1%] sm:left-[45%] lg:top-[2%] lg:left-[52%] xl:left-[65%]"
      />
      
      <!-- <div class="absolute inset-0 z-0">
      <img
        src="/assets/images/bg-yellow.png"
        class="min-w-[140%] h-full max-w-none -translate-x-[20%] translate-y-[2%] scale-110 object-cover object-center lg:min-w-full lg:translate-x-[-20%] lg:translate-y-[-2%] lg:scale-115 xl:translate-x-[-12%] xl:-translate-y-[3%] xl:scale-120"
      />
      </div>
      <div class="absolute inset-0 z-10 mx-auto max-w-[1440px]">
      <img src="/assets/images/veg.png" class="hidden md:block translate-x-[4%] inset-0 h-full w-full object-contain object-top" />
      <img src="/assets/images/vegPhone.png" class="absolute sm:hidden w-[95vw] left-1/2 -translate-x-1/2 z-2 " />
      
    </div> -->
      
      
      
      <!-- <img
        src="/assets/images/bg-yellow.png"
        class="absolute top-24 left-1/2 -translate-x-1/2 w-[933px] sm:-top-24 sm:w-[1953px] h-auto max-w-none"
      />
      <img
        src="/assets/images/top-title.png"
        class="left-1/2 -translate-x-1/2 absolute top-58 sm:top-32 w-[95vw] max-w-[680px] sm:w-auto"
      />
      <img src="/assets/images/veg.png" class="hidden md:block absolute z-20 top-6 left-2 w-22 sm:w-auto sm:top-5 sm:left-20" />
      <img
        src="/assets/images/Rectangle-1.png"
        class="absolute z-20 top-38 right-8 w-28 sm:w-auto sm:top-5 sm:right-2 xl:top-40 xl:right-6"
      />
      <img
        src="/assets/images/Rectangle.png"
        class="absolute z-20 top-28 right-35 w-28 sm:w-auto sm:top-20 sm:right-60"
      /> -->
      <div class="">
        <popup/>
      </div>
    </section>
    <!-- 抽獎獎品資訊 -->
    <div
      id="rewards"
      class="my-10 sm:my-16 flex text-center whitespace-pre-wrap px-4 sm:px-8 lg:px-36 flex-col text-[var(--primary-brown)] w-full"
    >
      <h1 class="text-4xl lg:text-5xl font-bold leading-normal sm:leading-16 lg:leading-18 whitespace-pre-wrap break-all">
        {{ "分享你的咖哩人格測驗結果至個人FB或IG動態牆\n並截圖上傳到"
        }}<span class="text-[#C81F19]">{{
          "好侍官方FB粉專抽獎活動貼文留言\n"
        }}</span
        >{{ "就有機會獲得\nApple Watch、 AirPods Pro 3、Marshall 藍牙喇叭！" }}
      </h1>
      <img src="/assets/images/iphone&airpods.png" class="hidden sm:block self-center w-full max-w-[680px]" />
      <img src="/assets/images/phone-rewards.png" class="block sm:hidden self-center w-full max-w-[286px]" />
        <svgTitle text="測出你的咖哩人格活動規則" type="curry" class="block max-[600px]:hidden h-[160px]" />
        <svgTitle text="測出你的咖哩人格" type="curry" class="hidden max-[375px]:hidden max-[600px]:block h-[96px]" />
        <svgTitle text="活動規則" type="curry" class="hidden max-[375px]:hidden max-[600px]:block h-[96px] -mt-10" />
        <svgTitle text="測出你的咖哩" type="curry" class="hidden max-[375px]:block h-[96px] -mt-10" />
        <svgTitle text="人格活動規則" type="curry" class="hidden max-[375px]:block h-[96px] -mt-10" />
      <template v-for="a in activity" :key="a.title">
        <div class="font-medium self-start flex flex-col mb-4 w-full">
          <div class="text-4xl self-start my-3 sm:my-4">
            {{ a.title }}
          </div>
          <ul
            v-if="a.content"
            class="list-disc list-outside text-left text-2xl self-start ml-5 sm:ml-8 my-3 sm:my-4"
          >
            <li v-for="c in a.content" :key="c">{{ c }}</li>
          </ul>
          <div
            class="self-start text-base text-left leading-relaxed break-all"
            v-for="(n,nIndex) in a.notices"
            :key="nIndex"
          >
            *{{ n }}
          <a v-if="a.linkkk&&nIndex===1" :href="'https://www.facebook.com/house.curry.tw'" target="_blank" class="underline">{{ '(https://www.facebook.com/house.curry.tw)' }}</a>

          </div>
        </div>
      </template>
      <div class="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-6 mt-2">
        <template v-for="r in rewards" :key="r.name">
          <div class="w-full max-w-[280px] mx-auto">
            <div
              class="relative bg-white w-full h-[280px] sm:h-70 rounded-2xl overflow-hidden"
            >
              <div class="text-2xl mt-4 sm:mt-6 font-medium">{{ "分享就抽" }}</div>
              <img
                :src="r.url"
                class="absolute -top-4 left-1/2 -translate-x-1/2 translate-y-1/2 max-w-[65%]"
              />
              <div
                class="absolute bottom-0 right-0 w-18 h-16 sm:w-22 sm:h-18 bg-[#C81F19] text-white text-xl sm:text-2xl flex items-end justify-end p-2"
                style="clip-path: polygon(100% 0, 100% 100%, 0 100%)"
              >
                {{ "1名" }}
              </div>
              <div class="mt-48 text-base font-medium">
                {{ "價值 $" + r.value }}
              </div>
            </div>
            <div class="text-xl sm:text-2xl font-medium mt-4 whitespace-pre-line text-center">{{ r.name }}</div>
          </div>
        </template>
      </div>
    </div>
    <!-- 全民咖哩任務 -->
    <div
      id="tasks"
      class="flex justify-center bg-[#F2E132] w-full min-h-0 relative overflow-hidden py-20 sm:py-28"
    >
      <img
        src="/assets/images/veg2.png"
        class="hidden lg:block absolute -translate-x-1/2 left-1/2 top-40 z-1"
      />
      <img
        src="/assets/images/title2.png"
        class="absolute -translate-x-1/2 left-1/2 top-30 sm:top-36 w-[88vw] max-w-[680px]"
      />
      <div class="flex mt-44 sm:mt-80 flex-col w-full justify-center px-4 sm:px-6 lg:px-2">
        <div class="text-5xl bg-white text-[var(--primary-brown)] font-medium text-center w-full sm:w-auto mx-auto px-22 py-2 text-nowrap">{{'任務1'}}</div>
        <svgTitle text="簡訊發票登陸活動" type="curry" class="block max-[375px]:hidden h-[160px]" />
        <svgTitle text="簡訊發票" type="curry" class="hidden max-[375px]:block h-[96px]" />
        <svgTitle text="登陸活動" type="curry" class="hidden max-[375px]:block h-[96px] -mt-10" />
        <svgTitle text="抽iPhone17、東京來回機票等大獎！" type="red" class="md:block hidden h-[96px] -mt-14 mb-10" />
        <svgTitle text="抽iPhone17、東京" type="red" class="block max-[375px]:hidden md:hidden h-[96px] -mt-14 " />
        <svgTitle text="來回機票等大獎！" type="red" class="block max-[375px]:hidden  md:hidden h-[96px] -mt-10 mb-10" />
        <svgTitle text="抽iPhone17、" type="red" class="hidden max-[375px]:block h-[96px] -mt-10" />
        <svgTitle text="東京來回機票" type="red" class="hidden max-[375px]:block h-[96px] -mt-10" />
        <svgTitle text="等大獎！" type="red" class="hidden max-[375px]:block h-[96px] -mt-10 mb-10" />
        
        <div class="flex flex-col gap-4 justify-center max-w-[1220px] mx-auto w-full">
          <div class="flex flex-col lg:flex-row gap-3 sm:gap-4 justify-center items-stretch">
            <div
              class="bg-[var(--primary-brown)] rounded-xl w-full lg:w-50 p-5 sm:p-9 text-white text-2xl flex items-center justify-center text-center"
            >
              {{ "活動辦法" }}
            </div>
            <div class="bg-white rounded-xl w-full lg:w-[864px] p-5 sm:p-9 font-medium">
              <div class="text-[var(--primary-brown)] text-2xl leading-relaxed">
                {{
                  "Step1. 於活動期間(2026/4/10-2026/5/7)於全台通路(全聯、大全聯、家樂福、家樂福超市、愛買等通路)一次購買「好侍咖哩塊系列」任2盒。"
                }}
              </div>
              <div class="text-[var(--text-red)] text-2xl leading-relaxed">
                {{ "※購買下圖示活動指定購買商品。" }}
              </div>
              <div class="text-[var(--primary-brown)] text-2xl leading-relaxed">
                {{
                  "Step2.憑該筆發票號碼，編輯簡訊「HOUSE+發票後八碼」傳送至83811，就可獲得抽獎資格。"
                }}
              </div>
              <div
                class="text-[var(--primary-brown)] text-base whitespace-pre-line mt-4 leading-relaxed"
              >
                {{
                  "*活動參加次數可累計，參與活動越多次，得獎機會越高！\n*同一張發票號碼僅限登錄乙次，且僅有乙次得獎機會，重複登錄將取消參加資格。\n*參加本活動未正確填寫資料，主辦單位將取消其參加及兌獎資格。\n*得獎者未滿18歲需提交法定代理人同意書及檢附證明文件，若無法於兌獎時提交視同放棄兌獎資格。"


                }}
              </div>
            </div>
          </div>
          <div class="flex flex-col lg:flex-row gap-3 sm:gap-4 justify-center items-stretch">
            <div
              class="bg-[var(--primary-brown)] rounded-xl w-full lg:w-50 p-5 sm:p-9 text-white text-2xl flex items-center justify-center text-center whitespace-pre-wrap"
            >
              {{ "活動指定\n購買商品" }}
            </div>
            <div class="bg-white rounded-xl w-full lg:w-[864px] py-5 px-5 sm:px-9 font-medium">
              <div
                class="text-[var(--primary-brown)] text-base leading-relaxed"
              >
                <div class="flex gap-4 flex-wrap mt-4 items-start justify-center sm:justify-start">
                  <div v-for="c in curryList" :key="c.name" class="w-full sm:w-auto">
                    <img :src="c.url" class="mx-auto max-h-[140px] object-contain" />
                    <div class="text-center p-2 text-base whitespace-pre-line">{{ c.name }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col lg:flex-row gap-3 sm:gap-4 justify-center items-stretch">
            <div
              class="bg-[var(--primary-brown)] rounded-xl w-full lg:w-50 p-5 sm:p-9 text-white text-2xl flex items-center justify-center text-center whitespace-pre-wrap"
            >
              {{ "發票登錄時間" }}
            </div>
            <div
              class="bg-white rounded-xl w-full lg:w-[864px] p-5 sm:p-9 font-medium text-[var(--primary-brown)] text-2xl leading-relaxed flex items-center"
            >
              {{ "2026年4月10日起至2026年5月7日23:59分止" }}
            </div>
          </div>
        </div>

        <UiButton
          variant="destructive"
          class="px-22 py-4 font-bold text-2xl self-center my-8 shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] z-4"
          >{{ "詳細活動資訊" }}
        </UiButton>
        <div class="text-5xl bg-white text-[var(--primary-brown)] font-medium text-center w-full sm:w-auto mx-auto px-22 py-2 text-nowrap">{{'任務2'}}</div>
        <svgTitle text="門店巡迴活動" type="curry" class="h-[160px] -mt-2 sm:-mt-5" />
              <div
          class="flex justify-center whitespace-pre-line text-center gap-2 flex-col items-center font-medium px-4"
        >
          <div class="text-[var(--primary-brown)] text-2xl whitespace-pre-line">
            {{ "好侍x全聯 春之咖哩季 門市限定活動" }}
          </div>
          <div class="text-[var(--text-red)] text-2xl">
            {{
              "凡於限定門市購買「好侍咖哩塊系列」任2盒，現場即贈送多樣好禮，"
            }}
          </div>
          <div class="text-[var(--text-red)] text-2xl">
            {{ "買越多送越多，購買滿4盒加碼現抽全聯禮券!" }}
          </div>
          <div class="text-[var(--primary-brown)] text-2xl whitespace-pre-line">
            {{ "（數量有限，送完為止）" }}
          </div>
          <div class="text-[var(--primary-brown)] text-2xl my-4 sm:my-6">
            <span class="text-[var(--text-red)]">{{ "憑發票再參加" }}</span
            >{{ "【簡訊發票登錄】抽獎活動！" }}
          </div>
        </div>
        <div class="max-w-[1020px] w-full flex justify-center mx-auto flex-col px-4 sm:px-6">
        <div
          class="self-start text-[var(--primary-brown)] text-2xl my-5 font-medium"
        >
          {{ "活動門店資訊：" }}
        </div>
        <img
          src="/assets/images/com-table.png"
          class="hidden sm:block w-full"
        />
        <img
          src="/assets/images/phone-table.jpg"
          class="block sm:hidden w-full"
        />
        </div>
        <svgTitle id="supermarkets" text="附近超市" type="curry" class="h-[160px]" />
<a 
  href="https://www.google.com/maps/search/?api=1&query=超市" 
  target="_blank"
  class="self-center"
>
  <UiButton
    variant="destructive"
    class="px-22 py-4 font-bold text-2xl shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] relative z-[2]"
  >
    {{ "立即查看最近超市" }}
  </UiButton>
</a>
        <svgTitle text="得獎公布" type="curry" class="h-[160px]" />
                <div class="text-[var(--text-red)] font-medium text-4xl mx-auto my-3">
          Coming Soon
        </div>
        <div class="text-[var(--primary-brown)] font-medium text-base mx-auto flex flex-col items-center text-center px-4 break-all">
          *公布日期：2026年5月12日(二)當天於台灣好侍FB官方粉絲團公布。
          <a href="https://www.facebook.com/house.curry.tw" target="_blank" class="underline">{{ '(https://www.facebook.com/house.curry.tw)' }}</a>
        </div>
      </div>

      <div class="roof" :style="{ backgroundImage: `url(${roofImage})` }"></div>
    </div>
    <!-- 注意事項 -->
    <div class="bg-[#F9F0DC] min-h-[1388px] flex flex-col w-full" id="notices">
        <svgTitle text="注意事項" type="curry" class="h-[120px] mx-auto" />
      <div
        class="break-all white-pre-line flex flex-col font-medium text-[var(--primary-brown)] mx-auto px-4 sm:px-8 lg:px-36 pb-12 w-auto sm:w-full"
      >
        <div class="text-base leading-relaxed">
          凡參加者，即視為已充分瞭解本注意事項中各項條款，且願意完全遵守及同意本活動之各項規定辦法：
        </div>
        <div
          class="bg-[var(--primary-brown)] text-white rounded-2xl px-6 py-2 text-2xl w-full max-w-[216px] text-center my-6 sm:my-8"
        >
          抽獎注意事項
        </div>
        <ul class="list-disc list-outside text-left text-base ml-5 sm:ml-8 leading-relaxed">
          <li>
            活動採隨機方式抽出參與者，每人限得一個獎項，主辦單位就本活動參加者之資格，保有審查之權利。
          </li>
          <li>
            參加抽獎者於參加本活動之同時，即同意接受本活動所有內容及細則之規範，如有違反本活動注意事項之行為，得取消其中獎資格，並對於任何破壞本活動之行為保留相關權利。
          </li>
          <li>
            本活動如有任何不可歸責於主辦單位之事由（電腦、網路等），而使中獎者所填寫之資料有遺失、錯誤、無法辨識或毀損，導致資料無效之情況，主辦單位不負任何法律責任，參加者或中獎者不得異議。
          </li>
          <li>
            參加抽獎者保證參加之帳號及所有提出之資料均為真實且正確，如有不實或不正確，將被取消得獎資格。如因此損害主辦單位或其他任何第三者，參加者需負一切相關責任。
          </li>
        </ul>
        <div
          class="bg-[var(--primary-brown)] text-white rounded-2xl px-6 py-2 text-2xl w-full max-w-[216px] text-center my-6 sm:my-8"
        >
          兌獎注意事項
        </div>
        <ul class="list-disc list-outside text-left text-base ml-5 sm:ml-8 leading-relaxed">
          <li>
            本活動僅限在台澎金地區進行，活動獎項之寄送地址亦僅限台澎金地區。
          </li>
          <li>
            主辦單位公布得獎者後，中獎者需填妥兌獎通知函，並以掛號方式寄回兌獎領據，經主辦單位核對中獎資訊無誤後，才得以進行兌獎作業。
          </li>
          <li>
            參加者同意填寫或提出之資料均為真實，且未冒用或盜用任何第三人之資料。依規定或資料有誤者，則取消得獎資格。
          </li>
          <li>
            得獎者未於指定之期限前回覆並繳交相關資料，或如未提供正確資訊或未詳細填寫個人基本資料，導致活動中獎時無法通知、逾期及資料缺漏者，或無法正確投遞至寄送地址等影響中獎相關事宜或作業程序，視同放棄得獎資格。資料填寫錯誤、不完整，致獎品無法送達，則視同放棄，不另補發。主辦單位將不再另進行候補中獎者抽選。
          </li>
          <li>
            所有中獎資格之查驗，依本活動辦法及主辦單位之實際審核結果為準，並為唯一之依據。
          </li>
          <li>
            所有得獎者之聯絡資料，僅用於主辦單位通知及活動領獎確認用，不會另作其他用途。
          </li>
          <li>
            獎品金額超過新台幣20,001元以上，依國稅局規定得獎者需依稅法先行自付10%機會中獎稅，由主辦單位或協辦單位或執行單位代扣繳，始得領取活動獎品，不願繳交稅金者視同放棄得獎權利。非中華民國境內居住之個人(即在中華民國境內居未達183天之本國人及外國人)不論中獎所得之金額，須就中獎所得扣繳20%機會中獎稅。主辦單位年底將開立各類所得稅扣繳憑單給中獎者，獎項價值以主辦單位實際購買贈品之統一發票或收據金額為主。(有關「中獎獎金之扣繳稅款」以財政部發佈之條款為準)。
          </li>
          <li>
            中獎者不得要求更改獎項或兌換現金，獎項均以實物為準，恕不得選款式、型號、挑色，亦不得將中獎資格轉讓其他人。
          </li>
          <li>
            違反前述規定之中獎人，主辦單位得取消其中獎項資格。若遇得獎贈品已寄出，則需將得獎贈品寄還活動小組，得獎贈品必須寄還新品。
          </li>
          <li>
            贈品在郵寄過程中，所造成的毀壞、遲遞、錯誤或遺失，主辦單位恕不負責。
          </li>
          <li>
            關於獎項之使用細節，或發生產品瑕疵及相關保固責任，均由該贈品廠商維修與保固，中獎者應逕向獎品製造或銷售公司詢問，台灣好侍食品股份有限公司及其執行單位概不負責。
          </li>
        </ul>
        <div class="mt-10 text-base">※ 活動如有未盡事宜將，以官方網站公告為準。</div>
        <div class="text-base">※ 以上日期與辦法如有調整，以網站公佈為主</div>

        <div
          class="bg-[var(--primary-brown)] text-white rounded-2xl px-6 py-2 text-2xl w-full max-w-[216px] text-center my-6 sm:my-8"
        >
          活動洽詢
        </div>
        <div class="text-base break-all">好侍你的咖哩人格測驗活動小組 <a href="mailto:housecurryevents@gmail.com" class="underline">housecurryevents@gmail.com</a></div>
      </div>
    </div>
    <div @click="scrollToTop" class="bg-white fixed right-5 bottom-5 w-18 h-18 rounded-full z-50 flex items-center justify-center cursor-pointer shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)]">
      <img src="/assets/images/arrow.png" class="w-auto" >
    </div>
  </div>

</template>
<script setup>
import watchImage from "~/assets/images/watch.png";
import airpodImage from "~/assets/images/airpod.png";
import speakerImage from "~/assets/images/speaker.png";
import roofImage from "~/assets/images/roof.png";
import curry1 from "~/assets/images/curry101.png";
import curry2 from "~/assets/images/curry102.png";
import curry3 from "~/assets/images/curry103.png";
import curry4 from "~/assets/images/curry104.png";
import curry5 from "~/assets/images/curry105.png";
import curry6 from "~/assets/images/curry106.png";
import curry7 from "~/assets/images/curry107.png";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const activity = [
  {
    title: "活動期間",
    content: ["測驗時間：2026年4月8日至2026年5月6日(三) 23:59止"],
    notices: [
      " 時間判別以本活動網站系統為準",
      " 得獎公布日期：2026年5月12日(二)當天於台灣好侍FB官方粉絲團公布"
    ],
    linkkk:true
  },
  {
    title: "活動辦法",
    content: [
      "活動期間於此活動網站完成咖哩人格測驗，並將測驗結果圖分享至個人Facebook或IG(不限貼文或限時動態)，截圖分享畫面上傳至台灣好侍FB粉專指定貼文下方，即可參加抽獎！",
    ],
    notices: [
      " 活動參加次數不可累計！",
      " 每人僅有乙次得獎機會，以第一個抽中獎品為主。",
      " 參加本活動未正確填寫資料，主辦單位將取消其參加及兌獎資格。",
      " 得獎者未滿18歲需提交法定代理人同意書及檢附證明文件，若無法於兌獎時提交視同放棄兌獎資格。",
      " 個人資料僅限台灣好侍食品「2026 測出你的咖哩人格」線上人格測驗活動使用。",
    ],
  },
  {
    title: "活動獎品",
  },
];
const rewards = [
  {
    name: "Apple Watch Series 11",
    value: "12,900",
    url: watchImage,
  },
  {
    name: "AirPods Pro 3",
    value: "7,490",
    url: airpodImage,
  },
  {
    name: "Marshall Middleton II \n攜帶式藍牙喇叭",
    value: "11,900",
    url: speakerImage,
  },
];
const curryList = [
  { name: "佛蒙特咖哩塊/甜味", url: curry1 },
  { name: "佛蒙特咖哩塊/中辣", url: curry2 },
  { name: "佛蒙特咖哩塊/辣味", url: curry3 },
  { name: "素食咖哩塊", url: curry4 },
  { name: "爪哇咖哩塊/中辣", url: curry5 },
  { name: "爪哇咖哩塊/辣味", url: curry6 },
  { name: "爪哇咖哩塊/香辛辣", url: curry7 },
];
</script>
<style scoped>
.roof {
  position: absolute;
  top: 0;
  left: 0;
  background-repeat: repeat-x;
  background-size: auto ;
  background-position: top left;
  width:100%;
  height: 79px;
}
</style>
