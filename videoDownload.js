const fs = require('fs')
const ytdl = require('ytdl-core')


let videos = [
    {
        url:'https://www.youtube.com/watch?v=-T5I__Jdl3w' ,
        nome: '8mile - Eminem'
    },
    {
        url:'https://www.youtube.com/watch?v=2NOaBqo-GnI&t=13s' ,
        nome: 'Westside Connection, Nate Dogg - Gangsta Nation '
    },
    {
        url:'https://www.youtube.com/watch?v=AQiUJlRa0N8' ,
        nome: 'Westside Connection - Bow Down'
    },
    {
        url:'https://www.youtube.com/watch?v=4mGfB5lbK-w' ,
        nome: 'Wu-Tang: 7th Chamber'
    },
    {
        url:'https://www.youtube.com/watch?v=EasoxN_sbVk' ,
        nome: `Wu-Tang Clan Ain't Nuthing Ta F' Wit`
    },
    {
        url:'https://www.youtube.com/watch?v=Xvbb7F2CCOU' ,
        nome: `Protect Ya Neck`
    },
    {
        url:'https://www.youtube.com/watch?v=g8qU3dNAcz8' ,
        nome: `Clan In Da Front`
    },
    {
        url:'https://www.youtube.com/watch?v=Lnpn_tJTHGs&feature=youtu.be' ,
        nome: `Da Mystery of Chessboxin' (Radio Edit)`
    },
    {
        url:'https://www.youtube.com/watch?v=B0KLqZP1UFs' ,
        nome: `Tearz`
    },
    {
        url:'https://www.youtube.com/watch?v=Lki_5CVKS0Y&feature=youtu.be' ,
        nome: `Da Mystery of Chessboxin`
    },
    {
        url:'https://www.youtube.com/watch?v=qTTWJfS-I_0' ,
        nome: `Wouldn't Get Far`
    },
    {
        url:'https://www.youtube.com/watch?v=PH34kMOjmQk' ,
        nome: `The Game - How We Do (Official Music Video)`
    },
    {
        url:'https://www.youtube.com/watch?v=1RMhI-uRAjU' ,
        nome: `Bitch Please`
    },
    {
        url:'https://www.youtube.com/watch?v=iyOGdf9qSkk' ,
        nome: `Just Dippin`
    },
    {
        url:'https://www.youtube.com/watch?v=yoYZf-lBF_U&feature=youtu.be' ,
        nome: `Mobb Deep - Shook Ones, Pt. II (Official HD Video)`
    },
    {
        url:'https://www.youtube.com/watch?v=PEnwXYJcSZc' ,
        nome: `Wu-Tang Clan - Method Man (Official Video)`
    },
    {
        url:'https://www.youtube.com/watch?v=T0WIunmGDKc&feature=youtu.be' ,
        nome: `Eazy-E - Boyz-N-The Hood [Lyrics]`
    },
    {
        url:'https://www.youtube.com/watch?v=pfW05jYKPd8' ,
        nome: `Dre Day (HQ) Dr. Dre ft Snoop Dogg`
    },
    {
        url:'https://www.youtube.com/watch?v=QWHwQEEtMJw' ,
        nome: `Dr. Dre - Let me Ride`
    },
    {
        url:'https://www.youtube.com/watch?v=2T4CQS7Qfhg' ,
        nome: `Snoop Dogg - Tha Shiznit (HQ)`
    },
    {
        url:'https://www.youtube.com/watch?v=pZdJErv_D8I' ,
        nome: `Snoop Dogg - Gin N Juice`
    },
    {
        url:'https://www.youtube.com/watch?v=iqmJ4gm9s1s' ,
        nome: `I'm So Hood`
    },
    {
        url:'https://www.youtube.com/watch?v=fNd94GWzZYA' ,
        nome: `The Gangsta, The Killa And The Dope Dealer`
    },
    {
        url:'https://www.youtube.com/watch?v=XNPCQaIQdEA&feature=youtu.be' ,
        nome: `Survival of the Fittest`
    },
    {
        url:'https://www.youtube.com/watch?v=V3GgU8Ty_kY' ,
        nome: `Machine Gun Funk (2006 Remaster)`
    },
    {
        url:'https://www.youtube.com/watch?v=phaJXp_zMYM&feature=youtu.be' ,
        nome: `The Notorious B.I.G. - Big Poppa (Official Music Video)`
    },
    {
        url:'https://www.youtube.com/watch?v=v1mKGlYL9jg&feature=youtu.be' ,
        nome: `The Notorious B.I.G. - Suicidal Thoughts (Official Audio)`
    },
    {
        url:'https://www.youtube.com/watch?v=Uz5o4EjCNLg' ,
        nome: `The Notorious B.I.G. - Everyday Struggle (Official Audio)`
    },
    {
        url:'https://www.youtube.com/watch?v=ynuW1SylEHY&feature=youtu.be' ,
        nome: `Ready to Die (2006 Remaster)`
    },
    {
        url:'https://www.youtube.com/watch?v=BquFXy4-Mh4' ,
        nome: `Unbelievable (2005 Remaster)`
    },
    {
        url:'https://www.youtube.com/watch?v=etlx02dJM3g&feature=youtu.be' ,
        nome: `Juicy (2005 Remaster)`
    },
    {
        url:'https://www.youtube.com/watch?v=jYPbhfFMg9Y' ,
        nome: `Kick in the Door (2008 Remaster)`
    },
    {
        url:'https://www.youtube.com/watch?v=TBqrcwcZ-88&feature=youtu.be' ,
        nome: `Chief Rocka`
    },
    {
        url:'https://www.youtube.com/watch?v=0xZHe8Q8Mlk&feature=youtu.be' ,
        nome: `They Reminisce Over You (T.R.O.Y.)`
    },
    {
        url:'https://www.youtube.com/watch?v=zlA0GHnERLs' ,
        nome: `Jazz (We've Got)`
    },
    {
        url:'https://www.youtube.com/watch?v=jBknsqfFERE' ,
        nome: `Check the Rhime`
    },
    {
        url:'https://www.youtube.com/watch?v=r1DaB0m58XI' ,
        nome: `Steve Biko (Stir It Up)`
    },
    {
        url:'https://www.youtube.com/watch?v=WvAqy1i2hEA' ,
        nome: `Camp Lo - Luchini AKA This Is It (Official HD Video)`
    },
    {
        url:'https://www.youtube.com/watch?v=cxN4nKk2cfk' ,
        nome: `A Tribe Called Quest - Jazz (We've Got) Buggin' Out (Official HD Video)`
    },
    {
        url:'https://www.youtube.com/watch?v=a-mAK3uB2_0' ,
        nome: `The Pharcyde - Passin' Me By (Official Music Video)`
    },
    {
        url:'https://www.youtube.com/watch?v=jQ-RrGCSa2M' ,
        nome: `The Pharcyde - Runnin' (Official Music Video)`
    },
    {
        url:'https://www.youtube.com/watch?v=HjNTu8jdukA' ,
        nome: `Slick Rick - Children's Story (Official Video)`
    },
    {
        url:'https://www.youtube.com/watch?v=fXJc2NYwHjw' ,
        nome: `Souls Of Mischief - 93 'Til Infinity`
    },
    {
        url:'https://www.youtube.com/watch?v=SLSbWDVI_pw&feature=youtu.be' ,
        nome: `Naughty by Nature - Feel Me Flow (Music Video)`
    },
    {
        url:'https://www.youtube.com/watch?v=NqhNTA2VHqk' ,
        nome: `Above The Clouds`
    },
    {
        url:'https://www.youtube.com/watch?v=3Q1TjMBoX2Y&feature=youtu.be' ,
        nome: `Lords Of The Underground What I'm After (Official Video) [Explicit]`
    },
    {
        url:'https://www.youtube.com/watch?v=O2TxmSU9I2c' ,
        nome: `Nuthin' But A G`
    },
    {
        url:'https://www.youtube.com/watch?v=h4UqMyldS7Q&feature=youtu.be' ,
        nome: `Ice Cube - It Was A Good Day`
    },
    {
        url:'https://www.youtube.com/watch?v=rzRqEWJYwX4' ,
        nome: `Ice Cube - You Know How We Do It (Official Video)`
    },
    {
        url:'https://www.youtube.com/watch?v=VQAtYyKK9fw' ,
        nome: `Keep Their Heads Ringin'`
    },
    {
        url:'https://www.youtube.com/watch?v=3mqhwhSerAw' ,
        nome: `Ice Cube - Friday (Official Video) [Explicit]`
    },
    {
        url:'https://www.youtube.com/watch?v=TMZi25Pq3T8' ,
        nome: `N.W.A. - Straight Outta Compton (Official Music Video)`
    },
    {
        url:'https://www.youtube.com/watch?v=qZuxPKUVGiw' ,
        nome:`N.W.A. - Fuk Da Police`
    },
    {
        url:'https://www.youtube.com/watch?v=umUHR1JlT_c' ,
        nome: `N.W.A. - Dope Man`
    },
    {
        url:'https://www.youtube.com/watch?v=PWVNzYMyLTY' ,
        nome: `It's On`
    },
    {
        url:'https://www.youtube.com/watch?v=5m9y6p_2Rg0&feature=youtu.be' ,
        nome: `N.W.A - Chin Check HQ Original version with lyrics`
    },
    {
        url:'https://www.youtube.com/watch?v=PWgvGjAhvIw' ,
        nome: `Outkast - Hey Ya! (Official HD Video)`
    },
    {
        url:'https://www.youtube.com/watch?v=MYxAiK6VnXw&feature=youtu.be' ,
        nome: `Outkast - Ms. Jackson (Official HD Video)`
    },
    {
        url:'https://www.youtube.com/watch?v=-JfEJq56IwI&feature=youtu.be' ,
        nome: `Outkast - So Fresh, So Clean (Official HD Video)`
    },
    {
        url:'https://www.youtube.com/watch?v=lVehcuJXe6I' ,
        nome: `Outkast - B.O.B. (Bombs Over Baghdad) (Official HD Video)`
    },
    {
        url:'https://www.youtube.com/watch?v=CSD2J8yaMmM' ,
        nome: `Ms. Jackson`
    },
    {
        url:'https://www.youtube.com/watch?v=M4fwLA1_ARM' ,
        nome: `Aquemini`
    },
    {
        url:'https://www.youtube.com/watch?v=Ttk3IUKfn4U' ,
        nome: `Outkast - Git Up, Git Out`
    },
    {
        url:'https://www.youtube.com/watch?v=uqB_UVlhlPA' ,
        nome: `Outkast - Elevators (Me & You) (Official HD Video)`
    },
    {
        url:'https://www.youtube.com/watch?v=dIPJfdjnR_8' ,
        nome: `SpottieOttieDopaliscious`
    }
]

let video = [{
    url: 'https://www.youtube.com/watch?v=dnZhlxdOUkI',
    nome: 'Ferrugem-Ao_vivo'
}]



/**
 * 
 * @param {*} opt opções
 * excemplo
 * 
 * let downloadOptions = { 
            video :{
                url : '',
                nome : ''
            },
            audioQuality : {
                quality: 'highestaudio'
            },
            path : './'
        }
 * @returns 
 */
const download = (opt) => {
    const download = ytdl(opt.video.url, opt.audioQuality);
    const writeStream = fs.createWriteStream(`${opt.path}${opt.video.nome}.mp4`); // path eg. './video.mp4'
     download.pipe(writeStream);
}

module.exports = download