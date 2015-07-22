angular.module('thunder', ['thunder.routes', 'thunder.controllers'])

.run(function($rootScope) {
    var ImgBaseUrl = 'assets/img/';

    $rootScope.itemInfo = {
        blue_tell: {
            imgLarge:  ImgBaseUrl + 'blueTell.png',
            imgSmall1: ImgBaseUrl + 'blueTellSmall1.png',
            imgSmall2: ImgBaseUrl + 'blueTellSmall2.png',
            text: 'Blue Tell Me About It'
        },
        cream_happy: {
            imgLarge:  ImgBaseUrl + 'creamHappy2.png',
            imgSmall1: ImgBaseUrl + 'creamHappySmall1.png',
            imgSmall2: ImgBaseUrl + 'creamHappySmall2.png',
            text: 'Cream Happy Sad'
        },
        light_blue_thunder: {
            imgLarge:  ImgBaseUrl + 'lightBlueThunder.png',
            imgSmall1: ImgBaseUrl + 'lightBlueThunderSmall1.png',
            imgSmall2: ImgBaseUrl + 'lightBlueThunderSmall2.png',
            text: 'Light Blue Thunder Lee'
        },
        pink: {
            imgLarge:  ImgBaseUrl + 'pink.png',
            imgSmall1: ImgBaseUrl + 'creamHappySmall1.png',
            imgSmall2: ImgBaseUrl + 'creamHappySmall2.png',
            text: 'Pink Shirt'
        },
        stripe_drama: {
            imgLarge:  ImgBaseUrl + 'stripeDrama.png',
            imgSmall1: ImgBaseUrl + 'creamHappySmall1.png',
            imgSmall2: ImgBaseUrl + 'creamHappySmall2.png',
            text: 'Striped Drama'
        },
        white_thunder: {
            imgLarge:  ImgBaseUrl + 'whiteThunder.png',
            imgSmall1: ImgBaseUrl + 'creamHappySmall1.png',
            imgSmall2: ImgBaseUrl + 'creamHappySmall2.png',
            text: 'White Thunder Lee'
        },
        yellow_drama: {
            imgLarge:  ImgBaseUrl + 'yellowDrama2.png',
            imgSmall1: ImgBaseUrl + 'yellowDramaSmall1.png',
            imgSmall2: ImgBaseUrl + 'yellowDramaSmall2.png',
            text: 'Yellow Drama'
        }
    };
});
