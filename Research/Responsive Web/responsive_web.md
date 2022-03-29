# 반응형 웹(Responsive Web)
모바일 환경이 시작되면서 장치(device)도 다양해져, 해상도의 크기 및 비율이 제각각 다른 경우에 화면 해상도에 따라 가로폭이나 배치를 변경하여 가독성을 높이는 것이다. <br>
즉, 하나의 웹사이트를 구축하여 다양한 디바이스의 화면 해상도에 최적화된 웹사이트를 제공하는 것이다.

## Viewport
뷰포트는 웹페이지가 사용자에게 보여지는 영역을 말한다. <br>
데스크탑에서는 브라우저의 크기를 바꿀 수 있기 떄문에 뷰포트의 크기를 바꿀 수 있는 반면 휴대폰이나 태블릿의 경우는 브라우저의 크기를 변경 할 수 없다.

- HTML5에서 소개된 뷰포트 <meta> 태그를 사용하면 모바일 기기에서 실제 렌더링되는 영역과 뷰포트의 크기를 조절할 수 있습니다. 또한 줌 레벨도 조정할 수 있습니다. 아래는 가장 일반적으로 사용되는 설정이다.

      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    - width=device-width : 페이지의 너비를 기기의 스크린 너비로 설정합니다. 즉, 렌더링 영역을 기기의 뷰포트의 크기와 같게 만들어 줍니다.
    - initial-scale=1.0 : 처음 페이지 로딩시 확대/축소가 되지 않은 원래 크기를 사용하도록 합니다. 0~10 사이의 값을 가집니다.
    <br> <br>
    또한 다음과 같은 값을 지정할 수도 있습니다.

    - minimum-scale : 줄일 수 있는 최소 크기를 지정합니다. 0~10 사이의 값을 가집니다.
    - maximum-scale : 늘릴 수 있는 최대 크기를 지정합니다. 0~10 사이의 값을 가집니다.
    - user-scalable : yes 또는 no 값을 가지며 사용자가 화면을 확대/축소 할 수 있는지는 지정합니다.

## Media Queries
미디어 쿼리는 화면(screen), 티비(tv), 프린터(print)와 같은 미디어 타입(media type)과 적어도 하나 이상의 표현식(expression)으로 구성된다.

- 미디어 쿼리는 @import와 < style > 요소는 사용할 수 없으며  < link > 요소의 media 속성을 사용하거나 < link > 요소로 불러오는 스타일 시트 내에 미디어 쿼리를 기술하여야 한다.

### < link >
    <link rel="stylesheet" media="screen and (max-width: 768px)" href="mystyle.css" /> 

### @media
    @media screen and (max-width: 768px) {
      body {
        background-color: lightgreen;
        }
    }

- 모바일이 우선 일 경우

      /* 모바일 스타일 */

      @media screen and (min-width: 769px) {
        /* 데스크탑 스타일 */
      }

- 데스크탑이 우선 일 경우

      /* 데스크탑 스타일 */

      @media screen and (min-width: 769px) {
        /* 모바일 스타일 */
      }






## 프로퍼티	Description
- width	viewport   너비(px)
- height	viewport   높이(px)
- device-width  	디바이스의 물리적 너비(px)
- device-height 	디바이스의 물리적 높이(px)
- orientation 	디바이스 방향 (가로 방향: landscape, 세로방향: portrait)
- device-aspect-ratio 	디바이스의 물리적 width/height 비율
- color 	디바이스에서 표현 가능한 최대 색상 비트수
- monochrome  	흑백 디바이스의 픽셀 당 비트수
- resolution  	디바이스 해상도


