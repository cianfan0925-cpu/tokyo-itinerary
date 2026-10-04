/* 东京七日行程 · Mapbox Standard 3D。Token 在 config.js 中配置。 */

const days = [
  {
    date: "12", week: "周一", kicker: "10月12日 · 周一", theme: "启程抵日 · 富士急初见",
    activities: [
      { time: "09:05", title: "香港启程", note: "国泰 CX504 前往东京成田", tag: "航班", lat: 22.308, lng: 113.9185, flight: { code: "CX504", icao: "CPA504", from: "HKG", to: "NRT", date: "2026-10-12" }, image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=500&q=82" },
      { time: "下午", title: "成田 → 新宿 → 富士急", note: "N'EX 转高速巴士，直达酒店门口", tag: "交通", lat: 35.772, lng: 140.3929, route: { origin: [35.772, 140.3929], waypoints: [[35.6896, 139.7006]], destination: [35.4871, 138.78], mode: "transit" }, image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=500&q=82" },
      { time: "晚间", title: "富吉温泉", note: "入住 Highland Resort 后泡汤休息", tag: "温泉", lat: 35.4895, lng: 138.7818, place: { name: "ハイランドリゾートホテル＆スパ", lat: 35.4895, lng: 138.7818 }, article: { title: "Highland Resort 酒店与温泉（富士急官方中文）", url: "https://www.fujiq.jp/zh-CHS/relate/index.html" }, image: "https://images.unsplash.com/photo-1601823984263-b87b59798b70?auto=format&fit=crop&w=500&q=82" }
    ]
  },
  {
    date: "13", week: "周二", kicker: "10月13日 · 周二", theme: "极限挑战 · 富士急全日游",
    activities: [
      { time: "上午", title: "提前入园", note: "使用酒店住客特权，提前 15 分钟入园", tag: "富士急", lat: 35.4876, lng: 138.7782, place: { name: "富士急ハイランド", lat: 35.4867, lng: 138.7802 }, article: { title: "今日游乐设施运行状况（富士急官方）", label: "当天导览", url: "https://www.fujiq.jp/zh-CHS/schedule/today/index.html" }, image: "https://www.yamanashi-kankou.jp/special/images/fujiq_image.jpg" },
      { time: "下午", title: "四大绝叫过山车", note: "按排队时间灵活安排挑战顺序", tag: "游乐园", lat: 35.4864, lng: 138.7808, place: { name: "富士急ハイランド", lat: 35.4867, lng: 138.7802 }, article: { title: "富士急游乐设施介绍（官方中文）", label: "设施导览", url: "https://www.fujiq.jp/zh-CHS/attraction/index.html" }, image: "https://www.city.fujiyoshida.yamanashi.jp/uploaded/image/1605.jpg" },
      { time: "晚间", title: "温泉与日式晚餐", note: "回酒店恢复体力，享用温泉美食", tag: "休息", lat: 35.4895, lng: 138.7818, place: { name: "ハイランドリゾートホテル＆スパ", lat: 35.4895, lng: 138.7818 }, article: { title: "Highland Resort 酒店与温泉（富士急官方中文）", url: "https://www.fujiq.jp/zh-CHS/relate/index.html" }, image: "https://images.unsplash.com/photo-1545048702-79362596cdc9?auto=format&fit=crop&w=500&q=82" }
    ]
  },
  {
    date: "14", week: "周三", kicker: "10月14日 · 周三", theme: "进驻东京 · 和牛之夜",
    activities: [
      { time: "上午", title: "富士急 → 新宿 · 高速巴士", note: "富士急ハイランド前乘中央高速巴士直达新宿（约1.5小时・2,200円），换地铁至纪尾井町新大谷", tag: "高速巴士", lat: 35.4871, lng: 138.78, route: { origin: [35.4871, 138.78], destination: [35.6895, 139.7004], mode: "transit" }, bus: { from: "富士急ハイランド", to: "バスタ新宿", duration: "约1小时30分～40分", fare: "片道 2,200円（网络购票 2,000円）", schedule: [ { dep: "06:38", arr: "08:05" }, { dep: "07:48", arr: "09:15" }, { dep: "08:18", arr: "09:55" }, { dep: "10:18", arr: "11:55" }, { dep: "14:18", arr: "15:55" }, { dep: "15:48", arr: "17:25" }, { dep: "17:48", arr: "19:25" }, { dep: "18:18", arr: "19:55" } ], link: "https://fuji.highwaybus.com/zh-hant/fuji-q/" }, image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=500&q=82" },
      { time: "下午", title: "新大谷日本庭园", note: "入住 The Main（主楼），在 400 年庭园散步", tag: "庭园", lat: 35.6815, lng: 139.7361, place: { name: "ザ・メイン ホテルニューオータニ 東京", lat: 35.6815, lng: 139.7361 }, article: { title: "东京新大谷酒店主楼 The Main（Trip.com）", label: "酒店文章", url: "https://hk.trip.com/hotels/tokyo-hotel-detail-2294281/hotel-new-otani-tokyo-the-main/" }, image: "https://www.gotokyo.org/en/spot/712/images/main.webp" },
      { time: "晚间", title: "和牛晚餐 · 鉄板焼 縁-en-", note: "新宿歌舞伎町 A5 黑毛和牛铁板烧（已预约）· 新宿三丁目站步行 4 分钟", tag: "美食", lat: 35.6946, lng: 139.703, place: { name: "鉄板焼 縁-en- 新宿店", lat: 35.6946, lng: 139.703 }, article: { title: "鉄板焼 縁-en- 新宿店 · Tabelog 食べログ", url: "https://s.tabelog.com/cn/tokyo/A1304/A130401/13315388/" }, phone: "050-5304-7463", image: "https://aka.doubaocdn.com/s/9SEKCRVdmh" }
    ]
  },
  {
    date: "15", week: "周四", kicker: "10月15日 · 周四", theme: "魔法世界 · 哈利波特影城",
    activities: [
      { time: "上午", title: "酒店周边早午餐", note: "睡到自然醒，再前往练马区", tag: "慢旅行", lat: 35.6818, lng: 139.7342, place: { name: "ザ・メイン ホテルニューオータニ 東京", lat: 35.6815, lng: 139.7361 }, image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=500&q=82" },
      { time: "13:00", title: "哈利波特影城", note: "进入电影幕后世界，途中享用下午茶", tag: "已定时", lat: 35.746, lng: 139.6475, place: { name: "ワーナー ブラザース スタジオツアー東京", lat: 35.746, lng: 139.6475 }, article: { title: "东京华纳兄弟哈利·波特影城（日本国家旅游局）", label: "官方介绍", url: "https://www.japan-travel.cn/spot/2088/" }, image: "https://assets.japantravel.com/photo/69847-234717/1200x630%21/tokyo-the-great-hall-unveiled-warner-bros-studio-tour-tokyo-234717.jpg" },
      { time: "晚间", title: "新宿三毛巨猫", note: "池袋或新宿晚餐，顺路看 3D 巨猫", tag: "夜游", lat: 35.6942, lng: 139.704, place: { name: "クロス新宿ビジョン", lat: 35.6942, lng: 139.704 }, article: { title: "新宿东口の猫（官方介绍）", label: "官方介绍", url: "https://g3dc.xspace.tokyo/" }, image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=500&q=82" }
    ]
  },
  {
    date: "16", week: "周五", kicker: "10月16日 · 周五", theme: "丰洲海鲜 · teamLab 光影",
    activities: [
      { time: "07:00", title: "丰洲海鲜早餐", note: "海鲜市场参观 + 刺身饭早餐", tag: "美食", lat: 35.6446, lng: 139.7838, place: { name: "豊洲市場", lat: 35.6446, lng: 139.7838 }, article: { title: "丰洲市场观光攻略（JeePe 中文指南）", url: "https://www.jeepe.jp/zh/articles/toyosu-market-guide-1554" }, image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=500&q=82" },
      { time: "09:30", title: "teamLab Planets", note: "准时入场，沉浸在水与光影之中", tag: "已定时", lat: 35.6474, lng: 139.7887, place: { name: "teamLab Planets TOKYO", lat: 35.6474, lng: 139.7887 }, article: { title: "teamLab Planets 东京丰洲（日本国家旅游局）", label: "官方介绍", url: "https://www.japan-travel.cn/spot/2137/" }, image: "https://voyapon.s3.amazonaws.com/wp-content/uploads/2020/10/21213802/Tokyo__teamlabplanets_52-1024x682.jpg" },
      { time: "下午", title: "银座漫步", note: "艺术博物馆、商店与精致晚餐", tag: "逛街", lat: 35.6717, lng: 139.7648, place: { name: "銀座", lat: 35.6717, lng: 139.7648 }, article: { title: "东京银座保姆级攻略（携程笔记）", label: "逛街攻略", url: "https://m.ctrip.com/webapp/you/community/detail?articleId=227953083" }, image: "https://images.unsplash.com/photo-1604928141064-207cea6f571f?auto=format&fit=crop&w=500&q=82" }
    ]
  },
  {
    date: "17", week: "周六", kicker: "10月17日 · 周六", theme: "计划待定",
    activities: []
  },
  {
    date: "18", week: "周日", kicker: "10月18日 · 周日", theme: "返程航班 · 其余待定",
    activities: [
      { time: "17:00", title: "N'EX 前往成田 · CX521 返港", note: "东京站乘 N'EX 至成田，17:00 搭乘国泰 CX521 返回香港", tag: "返程", lat: 35.772, lng: 140.3929, route: { origin: [35.6814, 139.768], destination: [35.772, 140.3929], mode: "transit" }, flight: { code: "CX521", icao: "CPA521", from: "NRT", to: "HKG", date: "2026-10-18" }, image: "https://images.unsplash.com/photo-1558862107-d49ef2a04d72?auto=format&fit=crop&w=500&q=82" }
    ]
  }
];

const sheet = document.querySelector("#tripSheet");
const dragZone = document.querySelector("#dragZone");
const scrollArea = document.querySelector("#sheetScroll");
const dateStrip = document.querySelector("#dateStrip");
const timeline = document.querySelector("#timeline");
const toast = document.querySelector("#mapToast");
const weatherChip = document.querySelector("#weatherChip");
const weatherIcon = document.querySelector("#weatherIcon");
const weatherTemperature = document.querySelector("#weatherTemperature");
const weatherMeta = document.querySelector("#weatherMeta");
let activeDay = 3;
let activePin = 0;
let sheetState = 0;
let dragging = false;
let startY = 0;
let startTop = 0;
let weatherRequest = 0;

const WEATHER_REFRESH_MS = 10 * 60 * 1000;
const TOKYO_FALLBACK = { lat: 35.6814, lng: 139.767, title: "东京" };

const shell = document.querySelector(".app-shell");
const positions = () => {
  const height = shell.clientHeight;
  return [Math.max(132, height * .22), height * .52, height - 98];
};

let map = null;
let markers = [];
let mapReady = false;
let view3D = true;
let manualLight = null;
let focusedLocation = false;
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const lights = ["dawn", "day", "dusk", "night"];
const lightLabels = { dawn: "晨光", day: "日光", dusk: "暮色", night: "夜景" };

function mapMessage(title, message) {
  document.querySelector("#mapMessage").hidden = false;
  document.querySelector("#mapMessageTitle").textContent = title;
  document.querySelector("#mapMessageText").textContent = message;
}

function activityLight() {
  const activity = days[activeDay].activities[activePin];
  if (!activity) return "day";
  if (activity.time === "晚间") return "night";
  const hour = Number(activity.time.split(":")[0]);
  if (Number.isFinite(hour)) return hour < 8 ? "dawn" : hour >= 19 ? "night" : hour >= 17 ? "dusk" : "day";
  return "day";
}

function updateLight() {
  const light = manualLight || activityLight();
  document.querySelector("#lightButton").textContent = lightLabels[light];
  if (mapReady) map.setConfigProperty("basemap", "lightPreset", light);
}

function initMap() {
  const config = window.TRIP_CONFIG || {};
  if (!config.mapboxToken?.startsWith("pk.")) {
    mapMessage("连接你的 Mapbox 地图", "在 config.js 填入 Public Token，即可开启 3D 东京地图。");
    return;
  }
  if (!window.mapboxgl || !mapboxgl.supported()) {
    mapMessage("地图暂时无法启动", "请检查网络或使用支持 WebGL 的新版 Safari。行程仍可正常查看。");
    return;
  }
  try {
    map = new mapboxgl.Map({
      container: "map", accessToken: config.mapboxToken,
      style: config.mapboxStyle || "mapbox://styles/mapbox/standard",
      center: [139.72, 35.68], zoom: 11.5, pitch: 25, bearing: -12,
      config: { basemap: { theme: "faded", lightPreset: "day", show3dObjects: true, showPointOfInterestLabels: false } },
      attributionControl: false
    });
    map.addControl(new mapboxgl.NavigationControl({ visualizePitch: true }), "top-right");
    // 放在顶部，避免版权信息被行程抽屉遮挡。
    map.addControl(new mapboxgl.AttributionControl({ compact: true }), "top-left");
    map.on("style.load", () => {
      mapReady = true;
      document.querySelector("#mapMessage").hidden = true;
      if (!map.getSource("trip-terrain")) map.addSource("trip-terrain", {
        type: "raster-dem", url: "mapbox://mapbox.mapbox-terrain-dem-v1", tileSize: 512, maxzoom: 14
      });
      updateLight();
      renderRoute(days[activeDay]);
      fitDay(days[activeDay]);
    });
    map.on("error", event => {
      const status = event.error?.status;
      if (status === 401 || status === 403) {
        mapMessage("地图连接被拒绝", "请检查 Public Token 是否有效，以及是否允许当前 localhost 或网站域名。");
      } else if (!mapReady) {
        mapMessage("地图加载失败", "请检查网络连接后刷新页面。");
      }
    });
  } catch {
    mapMessage("地图暂时无法启动", "请检查网络与浏览器的 WebGL 支持。");
  }
}

function routeUrl(route) {
  const params = new URLSearchParams({ api: "1" });
  params.set("origin", route.origin.join(","));
  if (route.waypoints && route.waypoints.length) {
    params.set("waypoints", route.waypoints.map(p => p.join(",")).join("|"));
  }
  params.set("destination", route.destination.join(","));
  params.set("travelmode", route.mode || "transit");
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

/* 航班追踪：无官方免费 API（OpenSky 仅限实时在飞航班），
   用 FlightAware / Flightradar24 公开追踪页（免费、无需 Key）。
   注意：FlightAware 浏览器端只认 ICAO 呼号（如 CPA504），
   传 IATA 航班号（如 CX504）会显示 Unknown Flight，因此用 icao 字段。 */
function flightTrackUrl(icao) {
  return `https://www.flightaware.com/live/flight/${icao}`;
}
function flightRadarUrl(code) {
  return `https://www.flightradar24.com/data/flights/${code.toLowerCase()}`;
}

/* 地点卡片：打开 Google Maps 的具体地点信息页（按名称查询，免费无需 Key） */
function placeUrl(place) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.name)}`;
}

/* 当地即时天气：跟随当前选中的行程点，不使用设备定位。 */
function weatherLocation() {
  const activity = days[activeDay].activities[activePin];
  if (!activity) return TOKYO_FALLBACK;
  let weatherLabel = "东京";
  if (activity.lat < 30) weatherLabel = "香港机场";
  else if (activity.lng > 140) weatherLabel = "成田机场";
  else if (activity.lng < 139) weatherLabel = "富士吉田";
  else if (/哈利波特/.test(activity.title)) weatherLabel = "练马";
  else if (/丰洲|teamLab/.test(activity.title)) weatherLabel = "丰洲";
  else if (/银座/.test(activity.title)) weatherLabel = "银座";
  else if (/和牛|新宿|巨猫/.test(activity.title)) weatherLabel = "新宿";
  else if (/酒店|庭园/.test(activity.title)) weatherLabel = "纪尾井町";
  return { ...activity, weatherLabel };
}

function weatherVisual(code, isDay) {
  if (code === 0) return { icon: isDay ? "☀︎" : "☾", label: "晴朗" };
  if ([1, 2].includes(code)) return { icon: isDay ? "🌤" : "☾", label: "晴间多云" };
  if (code === 3) return { icon: "☁︎", label: "多云" };
  if ([45, 48].includes(code)) return { icon: "≋", label: "有雾" };
  if ([51, 53, 55, 56, 57].includes(code)) return { icon: "🌦", label: "毛毛雨" };
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return { icon: "☂", label: "有雨" };
  if ([71, 73, 75, 77, 85, 86].includes(code)) return { icon: "❄", label: "有雪" };
  if ([95, 96, 99].includes(code)) return { icon: "ϟ", label: "雷雨" };
  return { icon: "◌", label: "天气未知" };
}

async function refreshWeather({ announce = false } = {}) {
  const location = weatherLocation();
  const locationName = location.weatherLabel || location.title;
  const requestId = ++weatherRequest;
  weatherChip.classList.add("is-loading");
  weatherMeta.textContent = `${locationName} · 更新中`;

  const params = new URLSearchParams({
    latitude: location.lat,
    longitude: location.lng,
    current: "temperature_2m,apparent_temperature,weather_code,is_day,precipitation,wind_speed_10m",
    timezone: "Asia/Tokyo"
  });

  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`Weather API ${response.status}`);
    const data = await response.json();
    if (requestId !== weatherRequest) return;
    const current = data.current;
    const visual = weatherVisual(current.weather_code, current.is_day);
    weatherIcon.textContent = visual.icon;
    weatherTemperature.textContent = `${Math.round(current.temperature_2m)}°`;
    weatherMeta.textContent = `${locationName} · ${visual.label} · 体感 ${Math.round(current.apparent_temperature)}°`;
    weatherChip.title = `降水 ${current.precipitation} mm · 风速 ${Math.round(current.wind_speed_10m)} km/h · 点击刷新`;
    weatherChip.classList.remove("has-error");
    if (announce) showToast(`${locationName}即时天气已更新`);
  } catch (error) {
    if (requestId !== weatherRequest) return;
    weatherIcon.textContent = "!";
    weatherTemperature.textContent = "--°";
    weatherMeta.textContent = `${locationName} · 暂时无法更新`;
    weatherChip.classList.add("has-error");
    if (announce) showToast("天气更新失败，请稍后再试");
  } finally {
    if (requestId === weatherRequest) weatherChip.classList.remove("is-loading");
  }
}

function pinIcon(index, active) {
  return `<span class="trip-pin ${active ? "active" : ""}">
      <svg viewBox="0 0 36 46" width="36" height="46" aria-hidden="true">
        <path class="pin-body" d="M18 1.5C10 1.5 3.5 8 3.5 16c0 11 14.5 28.5 14.5 28.5S32.5 27 32.5 16C32.5 8 26 1.5 18 1.5z"/>
        <circle class="pin-ring" cx="18" cy="16.5" r="7.5"/>
        <text class="pin-num" x="18" y="17.5">${index + 1}</text>
      </svg>
    </span>`;
}

function renderRoute(day) {
  if (!mapReady) return;
  markers.forEach(marker => marker.remove());
  markers = [];
  const points = day.activities.map(a => [a.lng, a.lat]);

  day.activities.forEach((activity, i) => {
    const element = document.createElement("button");
    element.className = "trip-pin-wrap";
    element.setAttribute("aria-label", `${activity.time} · ${activity.title}`);
    element.innerHTML = pinIcon(i, i === activePin);
    const popup = new mapboxgl.Popup({ className: "trip-popup", closeButton: true, offset: 40, maxWidth: "260px" })
      .setHTML(`<strong>${activity.time} · ${activity.title}</strong><span>${activity.note}</span>${activity.route ? `<a class="popup-route" href="${routeUrl(activity.route)}" target="_blank" rel="noopener">打开 Google Maps 路线 ↗</a>` : ""}${activity.place ? `<a class="popup-route" href="${placeUrl(activity.place)}" target="_blank" rel="noopener">Google Maps 查看地点 ↗</a>` : ""}${activity.article ? `<a class="popup-route" href="${activity.article.url}" target="_blank" rel="noopener">阅读介绍：${activity.article.title} ↗</a>` : ""}${activity.phone ? `<a class="popup-route" href="tel:${activity.phone.replace(/-/g, "").replace(/^0/, "+81")}">预约电话 ↗</a>` : ""}${activity.flight ? `<a class="popup-route" href="${flightTrackUrl(activity.flight.icao)}" target="_blank" rel="noopener">FlightAware 航班追踪 ↗</a><a class="popup-route" href="${flightRadarUrl(activity.flight.code)}" target="_blank" rel="noopener">Flightradar24 航班动态 ↗</a>` : ""}`);
    const marker = new mapboxgl.Marker({ element, anchor: "bottom" })
      .setLngLat([activity.lng, activity.lat]).setPopup(popup).addTo(map);
    element.addEventListener("click", event => {
      event.stopPropagation();
      selectPin(i, true);
      focusMarker(i);
    });
    markers.push(marker);
  });

  const data = { type: "FeatureCollection", features: points.length > 1 ? [{
    type: "Feature", properties: {}, geometry: { type: "LineString", coordinates: points }
  }] : [] };
  if (map.getSource("trip-route")) map.getSource("trip-route").setData(data);
  else {
    map.addSource("trip-route", { type: "geojson", data });
    map.addLayer({
      id: "trip-route-halo", type: "line", source: "trip-route", slot: "top",
      layout: { "line-cap": "round", "line-join": "round" },
      paint: { "line-color": "#fff4df", "line-width": 7, "line-opacity": .65 }
    });
    map.addLayer({
      id: "trip-route-line", type: "line", source: "trip-route", slot: "top",
      layout: { "line-cap": "round", "line-join": "round" },
      paint: { "line-color": "#6a3043", "line-width": 3, "line-dasharray": [2, 2], "line-opacity": .9 }
    });
  }
}

function fitDay(day) {
  focusedLocation = false;
  if (!mapReady) return;
  map.setTerrain(day.activities.some(activity => activity.lat > 30 && activity.lng < 139)
    ? { source: "trip-terrain", exaggeration: 1.2 } : null);
  const points = day.activities.map(a => [a.lng, a.lat]);
  const camera = { padding: visiblePadding(), pitch: view3D ? 25 : 0, bearing: view3D ? -12 : 0, duration: reducedMotion ? 0 : 1200 };
  if (!points.length) {
    map.flyTo({ ...camera, center: [139.72, 35.68], zoom: 11 });
    return;
  }
  const bounds = new mapboxgl.LngLatBounds();
  points.forEach(point => bounds.extend(point));
  map.fitBounds(bounds, { ...camera, maxZoom: 14.5 });
}

function visiblePadding() {
  const height = shell.clientHeight;
  const panelTop = positions()[sheetState];
  return { top: 88, left: 42, right: 42, bottom: Math.min(height - 110, height - panelTop + 20) };
}

function renderDates() {
  dateStrip.innerHTML = days.map((day, index) => `
    <button class="date-button ${index === activeDay ? "active" : ""}" data-day="${index}" aria-current="${index === activeDay ? "date" : "false"}">
      <strong>${day.date}</strong><small>${day.week}</small>
    </button>`).join("");
}

function renderTimeline(day) {
  if (!day.activities.length) {
    timeline.innerHTML = `<div class="empty-day"><p>暂无安排 · 计划待定</p><span>行程完善后会在这里显示</span></div>`;
    return;
  }
  timeline.innerHTML = day.activities.map((activity, index) => {
    const links = [
      activity.route ? `<a class="route-link" href="${routeUrl(activity.route)}" target="_blank" rel="noopener" aria-label="在 Google Maps 中查看路线">路线 ↗</a>` : "",
      activity.place ? `<a class="route-link" href="${placeUrl(activity.place)}" target="_blank" rel="noopener" aria-label="在 Google Maps 中查看地点">地图 ↗</a>` : "",
      activity.article ? `<a class="route-link" href="${activity.article.url}" target="_blank" rel="noopener" aria-label="阅读介绍文章">${activity.article.label || (activity.tag === "美食" ? "餐厅文章" : "酒店文章")} ↗</a>` : "",
      activity.phone ? `<a class="route-link" href="tel:${activity.phone.replace(/-/g, "").replace(/^0/, "+81")}" rel="noopener" aria-label="拨打餐厅预约电话">电话预约 ${activity.phone} ↗</a>` : "",
      activity.flight ? `<a class="route-link" href="${flightTrackUrl(activity.flight.icao)}" target="_blank" rel="noopener" aria-label="追踪航班动态">航班追踪 ↗</a>` : ""
    ].join("");
    const busCard = activity.bus ? `
      <details class="bus-card">
        <summary><span class="bus-title">高速巴士时刻表 · ${activity.bus.duration}</span><span class="bus-caret" aria-hidden="true">⌄</span></summary>
        <div class="bus-body">
          <p class="bus-route">${activity.bus.from} → ${activity.bus.to}（直达）· ${activity.bus.fare}</p>
          <div class="bus-rows">
            <div class="bus-head"><span>发车 · ${activity.bus.from}</span><span></span><span>到达 · ${activity.bus.to}</span></div>
            ${activity.bus.schedule.map(s => `
              <div class="bus-row"><span>${s.dep}</span><span class="bus-arrow">→</span><span>${s.arr}</span></div>`).join("")}
          </div>
          <p class="bus-note">班次为近期时刻表示例，请以官方为准。<br><a href="${activity.bus.link}" target="_blank" rel="noopener">官网时刻表与在线购票 ↗</a></p>
        </div>
      </details>` : "";
    return `
    <article class="activity ${index === activePin ? "highlight" : ""}" data-activity="${index}">
      <time class="activity-time">${activity.time}</time>
      <span class="activity-dot" aria-hidden="true"></span>
      <img src="${activity.image}" alt="${activity.title}" loading="lazy" referrerpolicy="no-referrer" />
      <div class="activity-copy"><h3>${activity.title}</h3><p>${activity.note}</p>${links ? `<div class="activity-actions" aria-label="${activity.title}相关链接">${links}</div>` : ""}${busCard}</div>
    </article>`;
  }).join("");
}

function renderDay() {
  const day = days[activeDay];
  document.querySelector("#dayKicker").textContent = day.kicker;
  document.querySelector("#dayTheme").textContent = day.theme;
  document.querySelector("#mapDayLabel").textContent = `${day.kicker} · ${day.theme.split(" · ")[0]}`;
  document.querySelector("#collapsedMeta").textContent = day.activities.length ? `${day.activities.length} 个安排 · ${day.theme}` : `暂无安排 · ${day.theme}`;
  renderDates(); renderRoute(day); fitDay(day); renderTimeline(day); refreshWeather();
}

function setSheetState(next, announce = false) {
  sheetState = Math.max(0, Math.min(2, next));
  const top = positions()[sheetState];
  sheet.style.top = `${top}px`;
  sheet.classList.toggle("collapsed", sheetState === 2);
  dragZone.setAttribute("aria-valuenow", String(sheetState));
  shell.classList.toggle("map-expanded", sheetState === 2);
  requestAnimationFrame(() => {
    map?.resize();
    if (mapReady) {
      if (focusedLocation) focusMarker(activePin, false);
      else fitDay(days[activeDay]);
    }
  });
  if (announce) showToast(["行程已展开", "地图与行程同时显示", "地图已展开"][sheetState]);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1500);
}

function selectPin(index, reveal = false) {
  activePin = Number(index);
  markers.forEach((marker, i) => {
    marker.getElement().querySelector(".trip-pin").classList.toggle("active", i === activePin);
    marker.getPopup().remove();
  });
  manualLight = null;
  updateLight();
  renderTimeline(days[activeDay]);
  refreshWeather();
  if (reveal) {
    if (sheetState === 2) setSheetState(1);
    requestAnimationFrame(() => document.querySelector(`[data-activity="${activePin}"]`)?.scrollIntoView({ behavior: "smooth", block: "center" }));
  }
}

function focusMarker(index, openPopup = true) {
  const activity = days[activeDay].activities[index];
  if (!activity || !mapReady) return;
  focusedLocation = true;
  map.setTerrain(activity.lng < 139 ? { source: "trip-terrain", exaggeration: 1.2 } : null);
  map.flyTo({
    center: [activity.lng, activity.lat], zoom: activity.flight ? 13.5 : 15.6,
    pitch: view3D ? (sheetState === 2 ? 55 : sheetState === 1 ? 45 : 25) : 0,
    bearing: view3D ? -18 : 0, padding: visiblePadding(),
    duration: reducedMotion ? 0 : 1400
  });
  if (openPopup && markers[index]) {
    const marker = markers[index];
    marker.getPopup().setLngLat(marker.getLngLat()).addTo(map);
  }
}

dateStrip.addEventListener("click", event => {
  const button = event.target.closest("[data-day]");
  if (!button) return;
  activeDay = Number(button.dataset.day);
  activePin = 0;
  manualLight = null;
  updateLight();
  scrollArea.scrollTop = 0;
  renderDay();
});

timeline.addEventListener("click", event => {
  if (event.target.closest(".route-link") || event.target.closest(".bus-card")) return; // 外部链接与时刻表卡片自带行为，不触发地图定位
  const activity = event.target.closest("[data-activity]");
  if (activity) {
    selectPin(activity.dataset.activity);
    focusMarker(activePin);
    showToast(`地图已定位：${days[activeDay].activities[activePin].title}`);
  }
});

dragZone.addEventListener("pointerdown", event => {
  dragging = true; startY = event.clientY; startTop = sheet.getBoundingClientRect().top;
  sheet.classList.add("dragging"); dragZone.setPointerCapture(event.pointerId);
});
dragZone.addEventListener("pointermove", event => {
  if (!dragging) return;
  const pos = positions();
  sheet.style.top = `${Math.max(pos[0], Math.min(pos[2], startTop + event.clientY - startY))}px`;
});
dragZone.addEventListener("pointerup", event => {
  if (!dragging) return;
  dragging = false; sheet.classList.remove("dragging"); dragZone.releasePointerCapture(event.pointerId);
  const current = sheet.getBoundingClientRect().top;
  const pos = positions();
  const nearest = pos.reduce((best, value, i) => Math.abs(value - current) < Math.abs(pos[best] - current) ? i : best, 0);
  setSheetState(nearest, true);
});

dragZone.addEventListener("keydown", event => {
  if (["ArrowDown", "PageDown"].includes(event.key)) { event.preventDefault(); setSheetState(sheetState + 1, true); }
  if (["ArrowUp", "PageUp"].includes(event.key)) { event.preventDefault(); setSheetState(sheetState - 1, true); }
});

document.querySelector("#mapModeButton").addEventListener("click", () => setSheetState(1, true));
weatherChip.addEventListener("click", () => refreshWeather({ announce: true }));
document.querySelector("#collapsedSummary").addEventListener("click", () => setSheetState(0, true));
document.querySelector("#locateButton").addEventListener("click", () => {
  if (!days[activeDay].activities.length) {
    fitDay(days[activeDay]);
    showToast("已定位东京 · 今日暂无安排");
    return;
  }
  focusMarker(activePin);
  showToast(`已定位：${days[activeDay].activities[activePin].title}`);
});
document.querySelector("#bookmarkButton").addEventListener("click", event => {
  const pressed = event.currentTarget.getAttribute("aria-pressed") === "true";
  event.currentTarget.setAttribute("aria-pressed", String(!pressed));
  event.currentTarget.textContent = pressed ? "♡" : "♥";
  showToast(pressed ? "已取消收藏" : "已收藏这趟行程");
});
document.querySelector("#backButton").addEventListener("click", () => showToast("这是单页互动演示"));
document.querySelector("#moreButton").addEventListener("click", () => showToast("分享与导出功能稍后加入"));
window.addEventListener("resize", () => setSheetState(sheetState));
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") refreshWeather();
});
setInterval(() => refreshWeather(), WEATHER_REFRESH_MS);

document.querySelector("#viewButton").addEventListener("click", event => {
  view3D = !view3D;
  event.currentTarget.textContent = view3D ? "3D" : "2D";
  event.currentTarget.setAttribute("aria-pressed", String(view3D));
  if (focusedLocation) focusMarker(activePin, false);
  else fitDay(days[activeDay]);
});
document.querySelector("#lightButton").addEventListener("click", () => {
  manualLight = lights[(lights.indexOf(manualLight || activityLight()) + 1) % lights.length];
  updateLight();
});
document.querySelector("#overviewButton").addEventListener("click", () => {
  markers.forEach(marker => marker.getPopup().remove());
  fitDay(days[activeDay]);
  showToast("虚线为行程地点连线 · 实际交通请查看路线");
});

initMap();
renderDay();
setSheetState(map ? 0 : 1);
