/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d6e1b3565c25792d0f495287156184bb"
  },
  {
    "url": "assets/css/0.styles.f45e872f.css",
    "revision": "0d08ddf63bb9f21642c12addc4f4c5ef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b635c98c.js",
    "revision": "484368cc1f8538ce33bd5b2825f1b0a4"
  },
  {
    "url": "assets/js/11.f5389cb8.js",
    "revision": "6f2c3cfd2bb6a2891961030c97c141c8"
  },
  {
    "url": "assets/js/12.d06be54f.js",
    "revision": "f7b0a2f9638a054dafe7d7219e6b71a6"
  },
  {
    "url": "assets/js/13.d5b39a3b.js",
    "revision": "aa4384e5aabe7e56b7eaf7301ef01246"
  },
  {
    "url": "assets/js/14.f5c4fb74.js",
    "revision": "ef8765f633bd6e9e8f247dcd9457b00a"
  },
  {
    "url": "assets/js/15.140a4a49.js",
    "revision": "aeb933495ef1c93e0e576ce361873578"
  },
  {
    "url": "assets/js/16.96e0afd1.js",
    "revision": "40cb0efd633aa47a50057575c9f8da23"
  },
  {
    "url": "assets/js/17.1621d6f8.js",
    "revision": "17f73096b46c66eba74807e4328775f1"
  },
  {
    "url": "assets/js/18.fb850ea8.js",
    "revision": "377556b6dba11e966793e5e1146a1512"
  },
  {
    "url": "assets/js/19.e792885f.js",
    "revision": "4973cd631651cd1ba10412b406e7b52f"
  },
  {
    "url": "assets/js/2.2a274f30.js",
    "revision": "8c020448baae9acd1c366afd506966dd"
  },
  {
    "url": "assets/js/20.8634aa44.js",
    "revision": "a5746913d741aa688c9b0bef3b49a202"
  },
  {
    "url": "assets/js/21.2e88ebce.js",
    "revision": "8ea05df855ad3b288fe5fc71951e441c"
  },
  {
    "url": "assets/js/22.44054224.js",
    "revision": "d5469f60a8a1e2c439858a74ce50a21d"
  },
  {
    "url": "assets/js/23.7a2ca6d4.js",
    "revision": "c6fe347412202e4d06bfa0f0cf653053"
  },
  {
    "url": "assets/js/24.9f114fb4.js",
    "revision": "4d2e191793d2f11e163aa0c2c759f901"
  },
  {
    "url": "assets/js/25.f8d1d035.js",
    "revision": "48939d8b9e78c9f7344876ca607a14ef"
  },
  {
    "url": "assets/js/26.05c11010.js",
    "revision": "e625043f29005862d1791da575587091"
  },
  {
    "url": "assets/js/27.cec41180.js",
    "revision": "ab981aeeb2586eac9e89036ef3ff4289"
  },
  {
    "url": "assets/js/28.872f546b.js",
    "revision": "55306953c7b38a5ed3614f98acfc7117"
  },
  {
    "url": "assets/js/29.f6d37f87.js",
    "revision": "8e9cc52965e8716eb0e11897354412e9"
  },
  {
    "url": "assets/js/3.0b6855f4.js",
    "revision": "6005a10f1a81d256ac1c96f8866a0a5a"
  },
  {
    "url": "assets/js/30.42cb6708.js",
    "revision": "d57a3552d4b3aa3440c9e4d6e0169d5c"
  },
  {
    "url": "assets/js/31.8825a69b.js",
    "revision": "3c750568e73307ceb6f0f840e285b9f9"
  },
  {
    "url": "assets/js/32.aa2e6e0d.js",
    "revision": "1cea976f8cbdac3689e953962324757c"
  },
  {
    "url": "assets/js/33.70b37c1e.js",
    "revision": "aa9d2287f0ab27ca501aaa1265964780"
  },
  {
    "url": "assets/js/34.5685a219.js",
    "revision": "0707c9f6bdd8935ef161aa41eb4c92cb"
  },
  {
    "url": "assets/js/35.da265bd7.js",
    "revision": "bdf7d27848a498e08b6251baeafc24db"
  },
  {
    "url": "assets/js/36.ddc6792a.js",
    "revision": "a8c8221b0c4b5d3fdc0ecf1555358da4"
  },
  {
    "url": "assets/js/37.1d1c2c62.js",
    "revision": "a4e2cdf0418ef3f861ad8c852fa11812"
  },
  {
    "url": "assets/js/38.dfc6af1b.js",
    "revision": "6fa1f603ddf95e9a3e1df5e68a641041"
  },
  {
    "url": "assets/js/39.f17651e5.js",
    "revision": "f610b628c2fb4e61c0f4a40bb4d4e434"
  },
  {
    "url": "assets/js/4.f7fc35f8.js",
    "revision": "3e147c93f683a033d6006e7e59949cdd"
  },
  {
    "url": "assets/js/40.6bfb0415.js",
    "revision": "283ff2c9556e268352c58fa5689ad509"
  },
  {
    "url": "assets/js/41.8ac4503e.js",
    "revision": "97fc408dc7a3e66e604c493131d6daa1"
  },
  {
    "url": "assets/js/42.9d0abd2b.js",
    "revision": "c8707b372d5df3c4afda141cb63c9627"
  },
  {
    "url": "assets/js/43.d19d122c.js",
    "revision": "374a89c54353280a0b1ff6fa071dc078"
  },
  {
    "url": "assets/js/44.56f9412c.js",
    "revision": "ba657ebd647334433c96afd0ba0b5e1f"
  },
  {
    "url": "assets/js/45.6a62db81.js",
    "revision": "1752bb1db13168e095e4ff1d162597c9"
  },
  {
    "url": "assets/js/46.8821f174.js",
    "revision": "4448e3bc4f81957d23c2e41db4d01f65"
  },
  {
    "url": "assets/js/47.422b60b2.js",
    "revision": "a4112a54482e5bc12597fbfb8b7721dd"
  },
  {
    "url": "assets/js/48.89edf591.js",
    "revision": "264ef0dcd8be0587976541e11c6b1fa4"
  },
  {
    "url": "assets/js/49.53b82d7e.js",
    "revision": "35d7146f973dc092afb47cec7dc53e40"
  },
  {
    "url": "assets/js/5.81bc92c4.js",
    "revision": "a81b964f4278dae1aaf06c13a7c57641"
  },
  {
    "url": "assets/js/50.65bf19ed.js",
    "revision": "586f90dc3205f1ca502716933b41a73d"
  },
  {
    "url": "assets/js/51.9b7bd61f.js",
    "revision": "5143ff0be37f12c45f2cfee97e42488b"
  },
  {
    "url": "assets/js/52.8015841f.js",
    "revision": "83744ae24e3b59eaa5548ea2f8bd965e"
  },
  {
    "url": "assets/js/53.b35c8a45.js",
    "revision": "7dac7c1c6415364fcb295e966323ee34"
  },
  {
    "url": "assets/js/54.ad255086.js",
    "revision": "172c84da9b26521b5372ec9490c24d51"
  },
  {
    "url": "assets/js/55.5d6220ee.js",
    "revision": "1e89784b0dbfc112863c3006e79a58a9"
  },
  {
    "url": "assets/js/56.86072289.js",
    "revision": "c518ae6467fb8f21b9483e6a8ff47a3d"
  },
  {
    "url": "assets/js/57.8faddcec.js",
    "revision": "18e29b5a4826f44bdf12ba9a441c21d0"
  },
  {
    "url": "assets/js/58.6a3a89c8.js",
    "revision": "780f0dcff28b5df4d2a55b8739e8197f"
  },
  {
    "url": "assets/js/59.54abefbe.js",
    "revision": "876eacc909c7a34d5b6c6bf6bfc9b38f"
  },
  {
    "url": "assets/js/6.6fde3483.js",
    "revision": "baa738afd6a7d334a3e48d1f70c610ff"
  },
  {
    "url": "assets/js/60.3ecc7cd1.js",
    "revision": "70fe4c17173093046999358e07b300e9"
  },
  {
    "url": "assets/js/61.76fe1713.js",
    "revision": "420517b3f586bab2e29f2a7516584d3f"
  },
  {
    "url": "assets/js/62.010d029e.js",
    "revision": "2acfc7437737c9f0ac003065a9f6f371"
  },
  {
    "url": "assets/js/63.b0bf4bf0.js",
    "revision": "0e117a1c1779d73dffaa7252ae01beed"
  },
  {
    "url": "assets/js/64.42b7ae63.js",
    "revision": "b4726b7a79c022c5b6f46e40d5e51f16"
  },
  {
    "url": "assets/js/65.a408e868.js",
    "revision": "4a56793916cc9882dd5eb558062d4a16"
  },
  {
    "url": "assets/js/66.4499d6d6.js",
    "revision": "5be1622df6dfbe80409a90266d87006a"
  },
  {
    "url": "assets/js/67.dbe66622.js",
    "revision": "a2f27eebcd2cb3501e2ed80188ee4ae1"
  },
  {
    "url": "assets/js/68.6515afe3.js",
    "revision": "7528ad6a0ba6faf7c6dc459fefdf9ed3"
  },
  {
    "url": "assets/js/69.587a0d39.js",
    "revision": "6d0f7cd75305374c5413b526eeefa0ed"
  },
  {
    "url": "assets/js/7.574f184f.js",
    "revision": "165b18725b95fd05d69422e261120ed8"
  },
  {
    "url": "assets/js/70.06c2a355.js",
    "revision": "d0f69e6623444fae3f2ac2e1ad7013a2"
  },
  {
    "url": "assets/js/71.b48ad246.js",
    "revision": "1d5ee42148292f6cdcec47d865ef153e"
  },
  {
    "url": "assets/js/72.3b0ddd89.js",
    "revision": "eac1a245f9d9aba2b59c51f8260e0cff"
  },
  {
    "url": "assets/js/73.b4698a7b.js",
    "revision": "b0cddfab25c441fb37b2bc096f8c2c19"
  },
  {
    "url": "assets/js/74.8b805f5e.js",
    "revision": "f80bc1e8a58d58d67f7162c192600ca1"
  },
  {
    "url": "assets/js/75.e82e62cb.js",
    "revision": "c436b29e0f730fd9699a8f9125cbf9b4"
  },
  {
    "url": "assets/js/76.bfd73f27.js",
    "revision": "7cb06ebf7d0ad19bffcb5fb42ae29809"
  },
  {
    "url": "assets/js/77.b06a03c4.js",
    "revision": "97dd49795c4fc9562c54030d86dd3300"
  },
  {
    "url": "assets/js/78.1974932d.js",
    "revision": "8231c08b2a24deb5dc144b6522797dc5"
  },
  {
    "url": "assets/js/79.8127e7f7.js",
    "revision": "81c208c735aa60a528e0e2c4e78ac9d7"
  },
  {
    "url": "assets/js/8.44e2ec24.js",
    "revision": "1642ec963948d2619ac0ce6cb8036b31"
  },
  {
    "url": "assets/js/80.bc8c9579.js",
    "revision": "863adf552aae9cca867624d4a8d2361e"
  },
  {
    "url": "assets/js/81.7d863e9c.js",
    "revision": "df4d4cf233b8a43ce40ab7ebe5a44305"
  },
  {
    "url": "assets/js/82.f438d6f0.js",
    "revision": "029216db3c1b59e82f8205eecaae6ea3"
  },
  {
    "url": "assets/js/83.5204e9f5.js",
    "revision": "6e87fb0018527340f3fc520984d82808"
  },
  {
    "url": "assets/js/84.5dbce07f.js",
    "revision": "b3a0edb58ecc90a877b129b924e3f9e2"
  },
  {
    "url": "assets/js/85.39d842d7.js",
    "revision": "d71486446c522efc5321c81eb6216808"
  },
  {
    "url": "assets/js/86.b9742a32.js",
    "revision": "338c219f3bfc2998992994c8128538cf"
  },
  {
    "url": "assets/js/87.adee741f.js",
    "revision": "393f6e405769b16e66db2edd1635ca41"
  },
  {
    "url": "assets/js/9.da06d019.js",
    "revision": "8d884c09dc6dced1cd23d04e5b0d6fe6"
  },
  {
    "url": "assets/js/app.f4f88ad2.js",
    "revision": "a3f4b14fbd07604a3712383ad21784eb"
  },
  {
    "url": "compiler/ast.html",
    "revision": "cf8b2d48d4821fb4ccb57a93c2af5e1d"
  },
  {
    "url": "compiler/binder.html",
    "revision": "d96c3ff78fc0cb91731f8439786f9bc5"
  },
  {
    "url": "compiler/checker.html",
    "revision": "f80308923980f9cd8446b576560a6ceb"
  },
  {
    "url": "compiler/emitter.html",
    "revision": "10b1284848af9247c64fd444d6404219"
  },
  {
    "url": "compiler/overview.html",
    "revision": "c6b5eeaee3cc1a7f49981e6a302965fc"
  },
  {
    "url": "compiler/parser.html",
    "revision": "a8af90b89b619dfde4f687540c4b706c"
  },
  {
    "url": "compiler/program.html",
    "revision": "e60da2447fb728e23b26beb74ac26707"
  },
  {
    "url": "compiler/scanner.html",
    "revision": "f201a696ca60756fdb5108912ac887c9"
  },
  {
    "url": "contact.png",
    "revision": "de36f2215c396bf6f74409c047520234"
  },
  {
    "url": "error/common.html",
    "revision": "d929fd4f8ca58e141c279b04354be166"
  },
  {
    "url": "error/interpreting.html",
    "revision": "d8dfa1e0557935f60c7bd314a863623c"
  },
  {
    "url": "faqs/class.html",
    "revision": "7ae8ea7707fde594430b4e1af68e8efb"
  },
  {
    "url": "faqs/commandline-behavior.html",
    "revision": "788e64fd135bde27b9d946c02e467157"
  },
  {
    "url": "faqs/comments.html",
    "revision": "0b912f372857a9d916884a3b217b93ef"
  },
  {
    "url": "faqs/common-bug-not-bugs.html",
    "revision": "946896f95e259d6bb031bcba8fb40c91"
  },
  {
    "url": "faqs/common-feature-request.html",
    "revision": "b1caf451972461c7ff0573a99be27469"
  },
  {
    "url": "faqs/decorators.html",
    "revision": "6fe62cf5c3720d7a24d62b07ed515cbe"
  },
  {
    "url": "faqs/enums.html",
    "revision": "4be14bbee2b8edd7e7d97f8a8824af53"
  },
  {
    "url": "faqs/function.html",
    "revision": "b96a6bcf269eac24ed33b9a72c748c2c"
  },
  {
    "url": "faqs/generics.html",
    "revision": "c044f61244d562846044124d37c7e8d5"
  },
  {
    "url": "faqs/glossary-and-terms.html",
    "revision": "7b2e425e375b1e1b7c8adbfbb7f292fc"
  },
  {
    "url": "faqs/jsx-and-react.html",
    "revision": "9994b3c493ded23f9af9221bd80c956f"
  },
  {
    "url": "faqs/modules.html",
    "revision": "7162431653e5bdc2dddf2d07c6d6df4b"
  },
  {
    "url": "faqs/thing-that-dont-work.html",
    "revision": "18567b7959226be102e10415e7bae3b0"
  },
  {
    "url": "faqs/tsconfig-behavior.html",
    "revision": "a89b06e2823f93d21033feba66cdbdfb"
  },
  {
    "url": "faqs/type-guards.html",
    "revision": "d9430cb80c1046cd3416358c097c0b9f"
  },
  {
    "url": "faqs/type-system-behavior.html",
    "revision": "e6bdaca5c5eeb2f98837a0ed0d27f7b5"
  },
  {
    "url": "ide.png",
    "revision": "0552400adbb2b3fcbed10a98a02e2516"
  },
  {
    "url": "index.html",
    "revision": "67daf192fb18473ad7405e701ab2d48d"
  },
  {
    "url": "jsx/nonReactJSX.html",
    "revision": "3fac4f752f03a58db40efca60d6b5ca9"
  },
  {
    "url": "jsx/reactJSX.html",
    "revision": "f7e7d4450c7cd4dfec64b9fb52b138c9"
  },
  {
    "url": "jsx/support.html",
    "revision": "e6313d7d5a784f1bcab2b19fd902bb60"
  },
  {
    "url": "logo.png",
    "revision": "166813938a8a65cf3197fa7da1d131f4"
  },
  {
    "url": "project/compilationContext.html",
    "revision": "0dc09fc0d418cf5848c6107bdb60a71f"
  },
  {
    "url": "project/declarationspaces.html",
    "revision": "e94f83d49963bc3b653aaaba0068917c"
  },
  {
    "url": "project/dynamicImportExpressions.html",
    "revision": "6d32834eb654006cffed7cfda54ce524"
  },
  {
    "url": "project/modules.html",
    "revision": "0e9cb529d514f0d5b3f10016af2e45bf"
  },
  {
    "url": "project/namespaces.html",
    "revision": "c0e3a0958fa2b4597346aa058b228716"
  },
  {
    "url": "tips/avoidExportDefault.html",
    "revision": "e319f688df413204de4e94b3372e1c58"
  },
  {
    "url": "tips/barrel.html",
    "revision": "a44ec1520584477387cea338d12e7792"
  },
  {
    "url": "tips/bind.html",
    "revision": "43c12817354643d4d4f5af9a96d3f1dd"
  },
  {
    "url": "tips/buildToggles.html",
    "revision": "74c567d7a557c76b7a7f1e5c83a1eb64"
  },
  {
    "url": "tips/classAreUseful.html",
    "revision": "69a51ee87017ce022dcd334bd6fb20ee"
  },
  {
    "url": "tips/covarianceAndContravariance.html",
    "revision": "917fb2c31c6bc2e756c9da7e82e8331f"
  },
  {
    "url": "tips/createArrays.html",
    "revision": "2080b9f40b9f9806dd47f37b089d71b1"
  },
  {
    "url": "tips/curry.html",
    "revision": "5d36b7d589a6c8c984816097a3f5b503"
  },
  {
    "url": "tips/functionParameters.html",
    "revision": "4490e41393616d65d6b8d9f61fdc07b0"
  },
  {
    "url": "tips/infer.html",
    "revision": "6be4aa7a1e836373f3a151825c2f7eb8"
  },
  {
    "url": "tips/lazyObjectLiteralInitialization.html",
    "revision": "8923b79f41e68714d213f84861f7e00c"
  },
  {
    "url": "tips/limitPropertySetters.html",
    "revision": "9f387f1c5971bebb4013b2a91e49d829"
  },
  {
    "url": "tips/metadata.html",
    "revision": "3c26dd6360bace8e627eceff76243f8b"
  },
  {
    "url": "tips/nominalTyping.html",
    "revision": "a1cf1953764643068c2f7d047bb6fb4d"
  },
  {
    "url": "tips/outFileCaution.html",
    "revision": "0a256b7ad1de872e3e031d19181238dc"
  },
  {
    "url": "tips/singletonPatern.html",
    "revision": "c16d6e1e2e79d9513951c8cfa0b8406e"
  },
  {
    "url": "tips/statefulFunctions.html",
    "revision": "fd709513a08ec5fc4c04faf6da5b3d52"
  },
  {
    "url": "tips/staticConstructors.html",
    "revision": "963506c5a1c2ca7b625b647f0859d1bc"
  },
  {
    "url": "tips/stringBasedEmuns.html",
    "revision": "2652d5875cdd15d9ae6311d0ff7e413a"
  },
  {
    "url": "tips/truthy.html",
    "revision": "0b8abb64cb63954f6c64f67dd32d6da8"
  },
  {
    "url": "tips/typeInstantiation.html",
    "revision": "aa527e28f88fd2069645cdddf3ebb7a4"
  },
  {
    "url": "tips/typesafeEventEmitter.html",
    "revision": "72bf8072b15e592fe5b900a95c52ad3b"
  },
  {
    "url": "typescript-downloads.jpg",
    "revision": "c820bb267e14bd6881db03696f3ae603"
  },
  {
    "url": "typings/ambient.html",
    "revision": "0261b46429bb609eff597193164cd870"
  },
  {
    "url": "typings/callable.html",
    "revision": "2ebf7cc283c7e8d1867fd762f3cfe850"
  },
  {
    "url": "typings/discrominatedUnion.html",
    "revision": "d7e68edc1cbd57ca40f3b9427c66b3b0"
  },
  {
    "url": "typings/enums.html",
    "revision": "9f3d419e4054ee155153a18644348d73"
  },
  {
    "url": "typings/exceptionsHanding.html",
    "revision": "11f5e5fc57caa83dc80b81a8175c5b84"
  },
  {
    "url": "typings/freshness.html",
    "revision": "f76bc673f4d24ae91e491620c2a68122"
  },
  {
    "url": "typings/functions.html",
    "revision": "947dde474d31aea7e800776d2d1d2797"
  },
  {
    "url": "typings/generices.html",
    "revision": "6e1e4a47012419f88c6ea90478ae6204"
  },
  {
    "url": "typings/indexSignatures.html",
    "revision": "3c3bbfe678a7ca44238b970eef1fc9f7"
  },
  {
    "url": "typings/interfaces.html",
    "revision": "91da28d3808dc42273502978c9a91633"
  },
  {
    "url": "typings/lib.html",
    "revision": "93219171d19992a99308272a04a43a62"
  },
  {
    "url": "typings/literals.html",
    "revision": "3f770597a7852966b8cce7af0bfc700a"
  },
  {
    "url": "typings/migrating.html",
    "revision": "04dd6e801dfa312506f6af92dfd77b90"
  },
  {
    "url": "typings/mixins.html",
    "revision": "d6e3ad6167010e9b40fe94369991c7bc"
  },
  {
    "url": "typings/movingTypes.html",
    "revision": "ec4be1e3ee47009fdfa84ace6028d78a"
  },
  {
    "url": "typings/neverType.html",
    "revision": "f0e44bd73a03763b86e8ea1534bbffa9"
  },
  {
    "url": "typings/overview.html",
    "revision": "f723e8ed2edca68ef777af0024002adf"
  },
  {
    "url": "typings/readonly.html",
    "revision": "321e58d087946c7f1b621c6e6c353e23"
  },
  {
    "url": "typings/thisType.html",
    "revision": "e6f8ada43d3e5e7a4813460fb3655879"
  },
  {
    "url": "typings/typeAssertion.html",
    "revision": "c14464bfd084525f736055e7bfee1533"
  },
  {
    "url": "typings/typeCompatibility.html",
    "revision": "a3cffe75f69993883f028f6095af948f"
  },
  {
    "url": "typings/typeGuard.html",
    "revision": "0c73eddef981a0e36528a1471aecd696"
  },
  {
    "url": "typings/typeInference.html",
    "revision": "2e1c1b7b1ed6d1e5012d8723423a5613"
  },
  {
    "url": "typings/types.html",
    "revision": "853db0ceca5a206041eea2ea656d909a"
  },
  {
    "url": "wechat.jpg",
    "revision": "36c771d59ed899617f1e6c49f9ee812f"
  },
  {
    "url": "zhifubao.jpg",
    "revision": "2a94b23f0d0d6d55befc332742849b67"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
