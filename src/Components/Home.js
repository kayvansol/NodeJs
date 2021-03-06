import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

const TITLE = 'صفحه اصلی'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>


        <div style={{ direction: 'rtl' }}>
          <p class="md-block-unstyled md-block-ltr"> </p><h2 class="md-block-header-two md-block-rtl"><strong class="md-inline-bold">برنامه نویسی &nbsp;ReactJS&nbsp;&nbsp;چیست؟</strong></h2><p class="md-block-unstyled md-block-rtl">در این مقاله ما به شما خواهیم گفت که <a class="md-inline-link" href="https://learnsource.net/" target="_blank" rel="noopener noreferrer">ری اکت جی اس </a>چیست و چرا باید از آن به جای Angular و چنین چیزهایی استفاده کرد.</p><figure class="md-block-image md-block-ltr"><img style={{ width: '40%' }} src="https://files.virgool.io/upload/users/24829/posts/m0a581jdk8zj/30ovzh9b1xr0.jpeg" alt="" data-action="zoom" /></figure><h3 class="md-block-header-three md-block-rtl"><strong class="md-inline-bold"> فریمورک ReactJS</strong> <strong class="md-inline-bold">&nbsp;چیست؟</strong></h3><p class="md-block-unstyled md-block-rtl">فریمورک ReactJS اساساً یک کتابخانه ی جاوا اسکریپت منبع باز است که برای ایجاد رابط کاربری مخصوص برای برنامه های یک صفحه ای استفاده می شود. این برای مدیریت لایه های نمایشی برای برنامه های وب و تلفن همراه استفاده می شود. React ابتدا توسط یک مهندس نرم افزاری برای فیس بوک یعنی Jordan Walke ساخته شد. برای اولین بار در ماه فوریه 2011 و در Instagram.com در سال 2012 اعمال می شود.</p><p class="md-block-unstyled md-block-rtl">فریمورک React به توسعه دهندگان اجازه می دهد برنامه های وب بزرگ را که می توانند داده ها را بدون بارگذاری مجدد صفحه تغییر دهند، ایجاد کنند. ری اکت می تواند با ترکیبی از دیگر کتابخانه ها یا چارچوب های جاوا اسکریپت مانند Angular JS در MVC استفاده شود.</p><h2 class="md-block-header-two md-block-rtl"><strong class="md-inline-bold">ویژگی های</strong> <strong class="md-inline-bold">ReactJS</strong></h2><ul class="md-block-unordered-list-item md-block-ltr"><li><strong class="md-inline-bold">JSX</strong></li></ul><p class="md-block-unstyled md-block-rtl">در React، به جای استفاده از regular JavaScript برای قالب سازی، از JSX استفاده می کند. JSX یک جاوا اسکریپت ساده است که اجازه میدهد از کدهای html استفاده کنید. این کدها تبدیل به کدهای جاوا اسکریپت می شوند که آنها را React Framework می نامند</p><p class="md-block-unstyled md-block-ltr"> </p><ul class="md-block-unordered-list-item md-block-ltr"><li><strong class="md-inline-bold">React Native</strong></li></ul><p class="md-block-unstyled md-block-rtl">فریمورک React Native دارای یک کتابخانه بومی (native) است که در سال 2015 توسط فیسبوک ساخته شد که اپلیکیشن هایی مانند اندروید، آی او اس و UPD را ارائه می دهد.</p><ul class="md-block-unordered-list-item md-block-ltr"><li><strong class="md-inline-bold">Single-Way data flow</strong></li></ul><p class="md-block-unstyled md-block-rtl">در React، مجموعه ای از مقادیر غیر قابل تغییر به رندر اجزای سازنده به عنوان یک برچسب به HTML منتقل می شود. کامپوننت ها نمی توانند به طور مستقیم هر گونه خواص را تغییر دهند، اما می توانند یک تابع فراخوانی را با استفاده از تغییرات ما انجام دهد. این فرآیند کامل به عنوان "خواص جریان پایین؛ اقدامات جریان دارد " شناخته شده است.</p><p class="md-block-unstyled md-block-ltr"> </p><h2 class="md-block-header-two md-block-rtl"><strong class="md-inline-bold">چرا</strong> <strong class="md-inline-bold">ReactJS</strong> <strong class="md-inline-bold">؟</strong></h2><p class="md-block-unstyled md-block-rtl">بسیاری از افراد این سوال را می پرسند که چرا ReactJS ؟ تعداد زیادی پلتفرم های منبع باز مانند انگولار وجود دارد که براحتی می توان با آن ها برنامه های وب درست کرد اما چرا ری اکت جی اس؟</p><p class="md-block-unstyled md-block-rtl"><em class="md-inline-italic">چند دلیل را با هم بررسی می کنیم:</em></p><ul class="md-block-unordered-list-item md-block-rtl"><li><strong class="md-inline-bold">Simplicity</strong> <strong class="md-inline-bold">(سادگی)</strong></li></ul><p class="md-block-unstyled md-block-rtl">یادگیری ReactJS بسیار ساده است. شما با استفاده از JSX براحتی می توانید جاوا اسکریپت و اچ تی ام ال را با هم ترکیب کنید و براحتی یک برنامه را بنویسید.</p><ul class="md-block-unordered-list-item md-block-rtl"><li><strong class="md-inline-bold">Easy to learn</strong> <strong class="md-inline-bold">(یادگیری آسان)</strong></li></ul><p class="md-block-unstyled md-block-rtl">هر کسی که دانش پایه قبلی در برنامه نویسی دارد، می تواند به راحتی React را درک کند در حالی که Angular و Ember به عنوان «زبان مخصوصDomain» نامیده می شوند و این بدان معنی است که یادگیری آنها دشوار است. در react شما فقط نیاز به دانش پایه ای از CSS و HTML دارید.</p><ul class="md-block-unordered-list-item md-block-rtl"><li><strong class="md-inline-bold">Native Approach</strong> <strong class="md-inline-bold">(کتابخانه و رویکرد بومی)</strong></li></ul><p class="md-block-unstyled md-block-rtl">فریمورک React می تواند برای ایجاد برنامه های تلفن همراه (React Native) استفاده شود. ری اکت یک طرفدار قوی از قابلیت استفاده مجدد است، به این معنی که مجدداً قابلیت استفاده کد را پشتیبانی می کند. بنابراین در همان زمان ما می توانیم IOS، Android و نرم افزار وب را ایجاد کنیم.</p><ul class="md-block-unordered-list-item md-block-rtl"><li><strong class="md-inline-bold">Data Binding</strong> <strong class="md-inline-bold">(اتصال داده ها)</strong></li></ul><p class="md-block-unstyled md-block-rtl">فریمورک React با استفاده از اتصال یک طرفه و یک معماری برنامه کاربردی به نام Flux کنترل جریان داده ها را به اجزاء از طریق یک نقطه کنترل - توزیع کننده کنترل می کند.</p><ul class="md-block-unordered-list-item md-block-rtl"><li><strong class="md-inline-bold">Performance</strong> <strong class="md-inline-bold">(کارایی)</strong></li></ul><p class="md-block-unstyled md-block-rtl">ری اکت هیچ مفهومی از dependency (وابستگی) را بکار نبرده است. اما به جای آن شما می توانید از ماژول های Browserify، Required JS،EcmaScript 6 استفاده کنید.</p><ul class="md-block-unordered-list-item md-block-rtl"><li><strong class="md-inline-bold">Testability</strong> <strong class="md-inline-bold">(تست پذیری)</strong></li></ul><p class="md-block-unstyled md-block-rtl">برنامه های ReactJS فوق العاده آسان برای تست هستند. ب استفاده از ری اکت تست پذیری براحتی انجام می شود.</p><p class="md-block-unstyled md-block-rtl"><strong class="md-inline-bold"><a class="md-inline-link" href="https://learnsource.net/" target="_blank" rel="noopener noreferrer">منبع : لرن سورس</a></strong></p>
        </div>



      </div>
    )
  }
}
