var winArr = [
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9'],
        ['1', '4', '7'],
        ['2', '5', '8'],
        ['3', '6', '9'],
        ['1', '5', '9'],
        ['3', '5', '7']
    ],
    boardArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    boardObj = {
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine'
    },
    userArr = [],
    aiArr = [],
    xFlag = false,
    oFlag = false,
    userFlag = false,
    aiFlag = false,
    aiMoveIndex = '',
    winArrCopy1 = winArr.slice(), //block userArr;
    winArrCopy2 = winArr.slice(), //help aiArr win;
    val = '';

function refresh() {
    boardArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
        userArr = [],
        aiArr = [],
        xFlag = false,
        oFlag = false,
        userFlag = false,
        aiFlag = false,
        aiMoveIndex = '',
        val = '',
        winArrCopy1 = winArr.slice(),
        winArrCopy2 = winArr.slice();
    //$('.box').text('');
    $('.box').removeAttr('status');
    $('.box').css({
        'background-color': 'white',
        'color': ''
    });
    //$('.xo').removeClass('hid');
    $('.xo').show();
    //$('.area').css({'position': 'absolute', 'top': '-700px'});
    $('.one').text('1');
    $('.two').text('2');
    $('.three').text('3');
    $('.four').text('4');
    $('.five').text('5');
    $('.six').text('6');
    $('.seven').text('7');
    $('.eight').text('8');
    $('.nine').text('9');
    // console.clear();

    // $('.first').show();
}

function checkWin() { // check if user wins;
    for (var i = 0; i < winArr.length; i++) {
        function blink() {
            var i0 = winArr[i][0],
                i1 = winArr[i][1],
                i2 = winArr[i][2],
                i0Class = boardObj[i0],
                i1Class = boardObj[i1],
                i2Class = boardObj[i2];
            $('.' + i0Class).css({
                'background-color': 'red',
                'color': 'white'
            });
            $('.' + i1Class).css({
                'background-color': 'red',
                'color': 'white'
            });
            $('.' + i2Class).css({
                'background-color': 'red',
                'color': 'white'
            });
            $('.' + i0Class).fadeTo('fast', 0).fadeTo('fast', 1).fadeTo('fast', 0).fadeTo('fast', 1).fadeTo('fast', 0).fadeTo('fast', 1);
            $('.' + i1Class).fadeTo('fast', 0).fadeTo('fast', 1).fadeTo('fast', 0).fadeTo('fast', 1).fadeTo('fast', 0).fadeTo('fast', 1);
            $('.' + i2Class).fadeTo('fast', 0).fadeTo('fast', 1).fadeTo('fast', 0).fadeTo('fast', 1).fadeTo('fast', 0).fadeTo('fast', 1);
        }

        if (userArr.includes(winArr[i][0]) && userArr.includes(winArr[i][1]) && userArr.includes(winArr[i][2])) {
            blink();
            return $('.result').text('you won').show().fadeOut(2000, refresh);
        }
        if (aiArr.includes(winArr[i][0]) && aiArr.includes(winArr[i][1]) && aiArr.includes(winArr[i][2])) {
            blink();
            return $('.result').text('computer won').show().fadeOut(2000, refresh);
        }

    }
    if (boardArr.length === 0) {
        return $('.result').text('tie').show().fadeOut(2000, refresh);
    }
}

function randomMove() {
    if (boardArr.includes('5')) {
        $('.five').attr('status', true);
        $('.five').text(oFlag ? 'X' : 'O');
        aiArr.push('5');
        var ind5 = boardArr.indexOf('5');
        return boardArr.splice(ind5, 1);
    } else if (boardArr.includes('1')) {
        $('.one').attr('status', true);
        $('.one').text(oFlag ? 'X' : 'O');
        aiArr.push('1');
        var ind1 = boardArr.indexOf('1');
        return boardArr.splice(ind1, 1);
    } else if (boardArr.includes('3')) {
        $('.three').attr('status', true);
        $('.three').text(oFlag ? 'X' : 'O');
        aiArr.push('3');
        var ind3 = boardArr.indexOf('3');
        return boardArr.splice(ind3, 1);
    } else if (boardArr.includes('7')) {
        $('.seven').attr('status', true);
        $('.seven').text(oFlag ? 'X' : 'O');
        aiArr.push('7');
        var ind7 = boardArr.indexOf('7');
        return boardArr.splice(ind7, 1);
    } else if (boardArr.includes('9')) {
        $('.nine').attr('status', true);
        $('.nine').text(oFlag ? 'X' : 'O');
        aiArr.push('9');
        var ind9 = boardArr.indexOf('9');
        return boardArr.splice(ind9, 1);
    } else if (boardArr.includes('2')) {
        $('.two').attr('status', true);
        $('.two').text(oFlag ? 'X' : 'O');
        aiArr.push('2');
        var ind2 = boardArr.indexOf('2');
        return boardArr.splice(ind2, 1);
    } else if (boardArr.includes('4')) {
        $('.four').attr('status', true);
        $('.four').text(oFlag ? 'X' : 'O');
        aiArr.push('4');
        var ind4 = boardArr.indexOf('4');
        return boardArr.splice(ind4, 1);
    } else if (boardArr.includes('8')) {
        $('.eight').attr('status', true);
        $('.eight').text(oFlag ? 'X' : 'O');
        aiArr.push('8');
        var ind8 = boardArr.indexOf('8');
        return boardArr.splice(ind8, 1);
    } else if (boardArr.includes('6')) {
        $('.six').attr('status', true);
        $('.six').text(oFlag ? 'X' : 'O');
        aiArr.push('6');
        var ind6 = boardArr.indexOf('6');
        return boardArr.splice(ind6, 1);
    }
}

function checkUserMove2() {

    if (userArr.length === 2) {

        function aiWin1() { //check if ai can move one more step to win;
            var iin = winArrCopy2.indexOf(winArr[i]);
            winArrCopy2.splice(iin, 1);
            var arrcop2 = winArr[i].slice();
            var diff2 = arrcop2.filter(val => !aiArr.includes(val)).join('');

            var diff2class = boardObj[diff2];
            if ($('.' + diff2class).attr('status')) {
                return randomMove();
            } // need to change to better move: move to better chance to win (move to position can form win with one more step or fork)
            $('.' + diff2class).text(oFlag ? 'X' : 'O');
            $('.' + diff2class).attr('status', true);
            aiArr.push(diff2);
            var boardin2 = boardArr.indexOf(diff2);
            return boardArr.splice(boardin2, 1);
        }

        for (var i = 0; i < winArr.length; i++) {
            if (winArr[i].includes(userArr[0]) && winArr[i].includes(userArr[1])) { //blocking user's win if user needs one more step to win;
                var iind = winArrCopy1.indexOf(winArr[i]);
                winArrCopy1.splice(iind, 1);
                var winArrCopy = winArr[i].slice();
                var userind0 = winArrCopy.indexOf(userArr[0]);
                winArrCopy.splice(userind0, 1);
                var userind1 = winArrCopy.indexOf(userArr[1]);
                winArrCopy.splice(userind1, 1);
                var move2element = winArrCopy.join('');
                var move2class = boardObj[move2element];


                if ($('.' + move2class).attr('status')) {

                    function two() { // user moves first, prevent user has 1,9 or 3,7;
                        $('.two').text(oFlag ? 'X' : 'O');
                        $('.two').attr('status', true);
                        aiArr.push('2');
                        var board2ind = boardArr.indexOf('2');
                        return boardArr.splice(board2ind, 1);
                    }

                    function three() { //user moves first, prevent user has 5, 9;
                        $('.three').text(oFlag ? 'X' : 'O');
                        $('.three').attr('status', true);
                        aiArr.push('3');
                        var board3ind = boardArr.indexOf('3');
                        return boardArr.splice(board3ind, 1);
                    }

                    if (aiArr.length === 1) { // new code!!! prevent: when user moves first, userArr is 1,9 or 3,7, aiArr is 5, then aiArr must move to 2 or 8, otherwise must lose;
                        if (userArr[0] === "5" && userArr[1] === "9") {
                            return three();
                        }
                        if (userArr[0] === "9" && userArr[1] === "1") {
                            return two();
                        }
                        if (userArr[0] === "1" && userArr[1] === "9") {
                            return two();
                        }
                        if (userArr[0] === "3" && userArr[1] === "7") {
                            return two();
                        }
                        if (userArr[0] === "7" && userArr[1] === "3") {
                            return two();
                        }

                    }
                    for (var i = 0; i < winArr.length; i++) {
                        if (winArr[i].includes(aiArr[0]) && winArr[i].includes(aiArr[1])) {
                            return aiWin1(); //prevent: ai goes first, when ai moves first and userArr is 7,4 or 6,4 or 2,8; and aiArr is 5,1; then ai will go randomMove(), not move to 3 and win;
                        }
                    }

                    return randomMove();
                }

                $('.' + move2class).text(oFlag ? 'X' : 'O');
                $('.' + move2class).attr('status', true);
                aiArr.push(move2element);
                var boardmove2ind = boardArr.indexOf(move2element);
                return boardArr.splice(boardmove2ind, 1);
            } else if (winArr[i].includes(aiArr[0]) && winArr[i].includes(aiArr[1])) { // ai wins with one more step;
                return aiWin1();
            }
        }

        function seven() { //when user goes first, prevent user goes 8, 1 or 1, 8
            $('.seven').text(oFlag ? 'X' : 'O');
            $('.seven').attr('status', true);
            aiArr.push('7');
            var board7ind = boardArr.indexOf('7');
            return boardArr.splice(board7ind, 1);
        }

        function nine() { //
            $('.nine').text(oFlag ? 'X' : 'O');
            $('.nine').attr('status', true);
            aiArr.push('9');
            var board9ind = boardArr.indexOf('9');
            return boardArr.splice(board9ind, 1);
        }
        if (userArr[0] === "8" && userArr[1] === "1") {
            return seven();
        }
        if (userArr[0] === "1" && userArr[1] === "8") {
            return seven();
        }
        if (userArr[0] === "6" && userArr[1] === "7") {
            return nine();
        }
        if (userArr[0] === "7" && userArr[1] === "6") {
            return nine();
        }
        if (userArr[0] === "8" && userArr[1] === "3") {
            return nine();
        }
        if (userArr[0] === "3" && userArr[1] === "8") {
            return nine();
        }
        if (userArr[0] === "6" && userArr[1] === "8") {
            return nine();
        }
        if (userArr[0] === "8" && userArr[1] === "6") {
            return nine();
        }
        return randomMove();
    } else if (userArr.length === 3) {
        for (var i = 0; i < 8; i++) {

            if (winArr[i].includes(aiArr[0]) && winArr[i].includes(aiArr[1])) { //when user goes first ai wins with one more step when aiArr has 2 elements;
                var indcopy2 = winArrCopy2.indexOf(winArr[i]);
                winArrCopy2.splice(indcopy2, 1);
                var arrcop = winArr[i].slice();
                var diff = arrcop.filter(val => !aiArr.includes(val)).join('');
                var diffclass = boardObj[diff];
                if ($('.' + diffclass).attr('status')) {
                    return blockUser3();
                }
                $('.' + diffclass).text(oFlag ? 'X' : 'O');
                $('.' + diffclass).attr('status', true);
                aiArr.push(diff);
                var boardind2 = boardArr.indexOf(diff);
                return boardArr.splice(boardind2, 1);
            } else if (aiArr.length === 3) { //when ai goes first, ai wins with one more step when aiArr has 3 elements;
                var x, y = [];
                winArrCopy2 = winArrCopy2.filter(function(val) {
                    for (var i = 0; i < userArr.length; i++) {
                        if (!val.includes(userArr[0]) && !val.includes(userArr[1]) && !val.includes(userArr[2])) {
                            return val;
                        }
                    }
                })

                winArrCopy2.forEach(function(val) {
                    x = val.filter(v => !aiArr.includes(v));
                    if (x.length === 1) {
                        y.push(x.join(''));
                    }
                })
                var winstep = y.join('');
                if (winstep.length !== 1) {
                    return blockUser3();
                }
                var winstepclass = boardObj[winstep];
                if ($('.' + winstepclass).attr('status')) {
                    return blockUser3();
                }
                $('.' + winstepclass).text(oFlag ? 'X' : 'O');
                $('.' + winstepclass).attr('status', true);
                aiArr.push(winstep);
                var boardi2 = boardArr.indexOf(winstep);
                return boardArr.splice(boardi2, 1);
            }
        }

        return blockUser3();

        function blockUser3() {
            var x, y = [];
            winArrCopy1 = winArrCopy1.filter(function(val, ind) {
                for (var i = 0; i < aiArr.length; i++) {
                    if (!val.includes(aiArr[0]) && !val.includes(aiArr[1])) {
                        return val;
                    }
                }
            })

            winArrCopy1.forEach(function(val, ind) {
                x = val.filter(v => !userArr.includes(v));
                if (x.length === 1) {
                    winArrCopy1.splice(ind, 1);
                    y.push(x[0]);
                }

            })
            if (y.length !== 1) {
                console.log('ai takes new move to form winning numbers after user moved 3 steps')
                userfirst3win();
                //return randomMove();
            } else {
                var move3element = y.join('');
                var move3class = boardObj[move3element];
                if ($('.' + move3class).attr('status')) {
                    return randomMove();
                }
                $('.' + move3class).text(oFlag ? 'X' : 'O');
                $('.' + move3class).attr('status', true);
                aiArr.push(move3element);
                var boardmove3ind = boardArr.indexOf(move3element);
                return boardArr.splice(boardmove3ind, 1);
            }

        }

        function userfirst3win() { //if user goes first and when user moves 3 times, ai will check if can form a 2 winning numbers;
            var x = [],
                y = [];
            winArrCopy2 = winArrCopy2.filter(function(val) { //get winning numbers which doesnt have user's number;
                for (var i = 0; i < userArr.length; i++) {
                    if (!val.includes(userArr[0]) && !val.includes(userArr[1]) && !val.includes(userArr[2])) {
                        return val;
                    }
                }
            })
            winArrCopy2.forEach(function(val) { //get possible ai moves from winning numbers minus current ai numbers;
                x = val.filter(v => !aiArr.includes(v)); //possible ai moves to win;
            })

            if (x.length === 2) {
                var x0element = x[0];
                var x0class = boardObj[x0element];
                $('.' + x0class).text(oFlag ? 'X' : 'O');
                $('.' + x0class).attr('status', true);
                aiArr.push(x0element);
                var x0ind = boardArr.indexOf(x0element);
                return boardArr.splice(x0ind, 1);
            } else {
                return randomMove();
            }
        }

    } else if (userArr.length === 4) {
        function aiWin3() { //check if ai can win with one more step when aiArr has 3 elements;
            winArrCopy2 = winArrCopy2.filter(function(val, ind) {
                for (var i = 0; i < userArr.length; i++) {
                    if (!val.includes(userArr[0]) && !val.includes(userArr[1]) && !val.includes(userArr[2]) && !val.includes(userArr[3])) {
                        return val;
                    }
                }
            })
            var x, y = [];
            winArrCopy2.forEach(function(val, ind) {
                x = val.filter(v => !aiArr.includes(v));
                if (x.length === 1) {
                    winArrCopy2.splice(ind, 1);
                    y.push(x[0]);
                }
            })
            if (y.length === 1) {
                var move4element = y.join('');
                var move4class = boardObj[move4element];
                if ($('.' + move4class).attr('status')) {
                    return blockUser4();
                }
                $('.' + move4class).text(oFlag ? 'X' : 'O');
                $('.' + move4class).attr('status', true);
                aiArr.push(move4element);
                var boardmove4ind = boardArr.indexOf(move4element);
                return boardArr.splice(boardmove4ind, 1);
            } else {
                blockUser4();
            }
        }
        aiWin3();



        function blockUser4() { //if user can win with one more step, block user when userArr has 4 elements;
            winArrCopy1 = winArrCopy1.filter(function(val, ind) {
                for (var i = 0; i < aiArr.length; i++) {
                    if (!val.includes(aiArr[0]) && !val.includes(aiArr[1]) && !val.includes(aiArr[2])) {
                        return val;
                    }
                }
            })
            var x, y = [];
            winArrCopy1.forEach(function(val, ind) {
                x = val.filter(v => !userArr.includes(v));
                if (x.length === 1) {
                    winArrCopy1.splice(ind, 1);
                    y.push(x[0]);
                }
            })
            if (y.length !== 1) {
                return randomMove();
            }

            var move4element = y.join('');
            var move4class = boardObj[move4element];
            if ($('.' + move4class).attr('status')) {
                return randomMove();
            }
            $('.' + move4class).text(oFlag ? 'X' : 'O');
            $('.' + move4class).attr('status', true);
            aiArr.push(move4element);
            var boardmove4ind = boardArr.indexOf(move4element);

            return boardArr.splice(boardmove4ind, 1);

        }

    } else { //for AI's first step;

        return randomMove()
    }
}



function aiMove() { //ai move automatically according to Math.random();
    if (xFlag || oFlag) {
        checkUserMove2();
        checkWin();
    }
}
/*function aiMove (){//ai move automatically according to Math.random();//random backup
    if(xFlag||oFlag){
            $(this).attr('status', 'true');//prevent user double click clicked box;
    aiMoveIndex=Math.floor(Math.random()*boardArr.length);
    var aiPosClass=boardObj[boardArr[aiMoveIndex]];
    $('.'+aiPosClass).text(oFlag ? 'X' : 'O');
    $('.'+aiPosClass).attr('status', 'true');
    aiArr.push(boardArr[aiMoveIndex])//===val e.g. 1,2,3...;
    boardArr.splice(aiMoveIndex,1);//create aiArr;
    checkWin();
    }
}*/

function changeBoardArr() { //splice boardArr after each click;
    var index = boardArr.indexOf(val);
    return boardArr.splice(index, 1);
}

function checkXO() { // check user's x or o choice;
    $('.x').click(function() {
        xFlag = true;
        //$('.xo').addClass('hid');
        $('.xo').hide();
        // $('.area').css({'position': 'relative', 'top': '0'});
    });

    $('.o').click(function() {
        oFlag = true;
        //$('.xo').addClass('hid');
        $('.xo').hide();
        //$('.area').css({'position': 'relative', 'top': '0'});
        aiMove(); //ai moves first
    });
}

function tic() {

    checkXO(); // check user's x or o choice;
    //checkUser();// check user or computer first;

    $('.box').click(function() { //user click board;

        if (!$(this).attr('status')) { //prevent double click same box;
            if (oFlag || xFlag) {

                xFlag ? $(this).text('X') : $(this).text('O');
                $(this).attr('status', 'true'); //after clicking status changed to true; prevent user double click clicked box;
                val = $(this).attr('value'); //get 1,2,3... number value;
                userArr.push(val); //create user position array;
                changeBoardArr();
                checkWin();
                aiMove();
            }

        }
    })

}
tic();
