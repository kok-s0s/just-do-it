import Img0 from '../../assets/images/white/0@1x.png'
import Img1 from '../../assets/images/white/1@1x.png'
import Img2 from '../../assets/images/white/2@1x.png'
import Img3 from '../../assets/images/white/3@1x.png'
import Img4 from '../../assets/images/white/4@1x.png'
import Img5 from '../../assets/images/white/5@1x.png'
import Img6 from '../../assets/images/white/6@1x.png'
import Img7 from '../../assets/images/white/7@1x.png'
import Img8 from '../../assets/images/white/8@1x.png'
import Img9 from '../../assets/images/white/9@1x.png'
import Img10 from '../../assets/images/white/10@1x.png'
import Img11 from '../../assets/images/white/11@1x.png'
import Img12 from '../../assets/images/white/12@1x.png'
import Img13 from '../../assets/images/white/13@1x.png'
import Img14 from '../../assets/images/white/14@1x.png'
import Img15 from '../../assets/images/white/15@1x.png'
import Img16 from '../../assets/images/white/16@1x.png'
import Img17 from '../../assets/images/white/17@1x.png'
import Img18 from '../../assets/images/white/18@1x.png'
import Img19 from '../../assets/images/white/19@1x.png'
import Img20 from '../../assets/images/white/20@1x.png'
import Img21 from '../../assets/images/white/21@1x.png'
import Img22 from '../../assets/images/white/22@1x.png'
import Img23 from '../../assets/images/white/23@1x.png'
import Img24 from '../../assets/images/white/24@1x.png'
import Img25 from '../../assets/images/white/25@1x.png'
import Img26 from '../../assets/images/white/26@1x.png'
import Img27 from '../../assets/images/white/27@1x.png'
import Img28 from '../../assets/images/white/28@1x.png'
import Img29 from '../../assets/images/white/29@1x.png'
import Img30 from '../../assets/images/white/30@1x.png'
import Img31 from '../../assets/images/white/31@1x.png'
import Img32 from '../../assets/images/white/32@1x.png'
import Img33 from '../../assets/images/white/33@1x.png'
import Img34 from '../../assets/images/white/34@1x.png'
import Img35 from '../../assets/images/white/35@1x.png'
import Img36 from '../../assets/images/white/36@1x.png'
import Img37 from '../../assets/images/white/37@1x.png'
import Img38 from '../../assets/images/white/38@1x.png'
import Img99 from '../../assets/images/white/99@1x.png'

const icons = new Map([
  [0, Img0],
  [1, Img1],
  [2, Img2],
  [3, Img3],
  [4, Img4],
  [5, Img5],
  [6, Img6],
  [7, Img7],
  [8, Img8],
  [9, Img9],
  [10, Img10],
  [11, Img11],
  [12, Img12],
  [13, Img13],
  [14, Img14],
  [15, Img15],
  [16, Img16],
  [17, Img17],
  [18, Img18],
  [19, Img19],
  [20, Img20],
  [21, Img21],
  [22, Img22],
  [23, Img23],
  [24, Img24],
  [25, Img25],
  [26, Img26],
  [27, Img27],
  [28, Img28],
  [29, Img29],
  [30, Img30],
  [31, Img31],
  [32, Img32],
  [33, Img33],
  [34, Img34],
  [35, Img35],
  [36, Img36],
  [37, Img37],
  [38, Img38],
  [99, Img99],
])

export const giveWeatherIcon = (code: number) => {
  if (code < 0 || code >= 39)
    return icons.get(99)
  else return icons.get(code)
}
