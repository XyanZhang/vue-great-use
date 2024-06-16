import ButtonCLick from './button-click'
// export default function (app: any) {
//   app.directive('button-click', ButtonCLick)
// }

export default {
  install(app: any) {
    app.directive('button-click', ButtonCLick)
  }
}
