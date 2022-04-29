var p1 = 0;
var p2 = 0;
var t = false;
var Player1 = '';
var Player2 = '';
function p() {
    Player1 = document.getElementsByName("player1")[0].value;
    if (Player1 == '') {
        Player1 = 'Rojo';
    }
    document.getElementById("Player1").innerHTML = Player1;
    Player2 = document.getElementsByName("player2")[0].value;
    if (Player2 == '') {
        Player2 = 'Verde';
    }
    document.getElementById("Player2").innerHTML = Player2;
    if (document.getElementById("form").style.visibility == 'hidden') {
        document.getElementById("form").style.visibility = 'visible';
    }
    else {
        document.getElementById("form").style.display = 'none';
        document.getElementById("btn").style.display = 'none';
    }
}
function createtateti() {
    document.getElementById("mitabla").style.visibility = 'visible';
    document.getElementById("1").style.backgroundColor = '#FFFFFF';
    document.getElementById("2").style.backgroundColor = '#FFFFFF';
    document.getElementById("3").style.backgroundColor = '#FFFFFF';
    document.getElementById("4").style.backgroundColor = '#FFFFFF';
    document.getElementById("5").style.backgroundColor = '#FFFFFF';
    document.getElementById("6").style.backgroundColor = '#FFFFFF';
    document.getElementById("7").style.backgroundColor = '#FFFFFF';
    document.getElementById("8").style.backgroundColor = '#FFFFFF';
    document.getElementById("9").style.backgroundColor = '#FFFFFF';
    document.getElementById("pp1").innerHTML = String(p1);
    document.getElementById("pp2").innerHTML = String(p2);
    p();
    document.getElementById("form").style.display = 'none';
    document.getElementById("btn").style.display = 'none';
    if (t == false) {
        document.getElementById("cp").innerHTML = Player1;
    }
    else {
        document.getElementById("cp").innerHTML = Player2;
    }
    return (new tateti);
}
var tateti = /** @class */ (function () {
    function tateti() {
        this.w = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.cw = false;
    }
    tateti.prototype.marcada = function (obj, pos) {
        var _this = this;
        if (this.cw == false) {
            if (this.w[pos] == 0) {
                if (t == false) {
                    this.w[pos] = 1;
                    t = true;
                    obj.style.backgroundColor = "#FF0000";
                    setTimeout(function () {
                        _this.win(1);
                        if (_this.cw == false) {
                            document.getElementById("cp").innerHTML = Player2;
                        }
                    }, 150);
                }
                else {
                    this.w[pos] = 2;
                    t = false;
                    obj.style.backgroundColor = "#00FF00";
                    setTimeout(function () {
                        _this.win(2);
                        if (_this.cw == false) {
                            document.getElementById("cp").innerHTML = Player1;
                        }
                    }, 150);
                }
                setTimeout(function () {
                    _this.check();
                }, 150);
            }
        }
    };
    tateti.prototype.win = function (color) {
        if ((this.w[0] == color && this.w[1] == color && this.w[2] == color) ||
            (this.w[3] == color && this.w[4] == color && this.w[5] == color) ||
            (this.w[6] == color && this.w[7] == color && this.w[8] == color) ||
            (this.w[0] == color && this.w[3] == color && this.w[6] == color) ||
            (this.w[1] == color && this.w[4] == color && this.w[7] == color) ||
            (this.w[2] == color && this.w[5] == color && this.w[8] == color) ||
            (this.w[0] == color && this.w[4] == color && this.w[8] == color) ||
            (this.w[2] == color && this.w[4] == color && this.w[6] == color)) {
            if (color == 1) {
                alert('Gana equipo ' + Player1);
                p1 += 1;
                document.getElementById("pp1").innerHTML = String(p1);
            }
            if (color == 2) {
                alert('Gana equipo ' + Player2);
                p2 += 1;
                document.getElementById("pp2").innerHTML = String(p2);
            }
            this.cw = true;
        }
    };
    tateti.prototype.check = function () {
        var check = 0;
        for (var i = 0; i < this.w.length; i++) {
            if (this.w[i] == 0) {
                check = check + 1;
            }
        }
        if (check == 0 && this.cw == false) {
            alert("Empate");
        }
    };
    return tateti;
}());
//# sourceMappingURL=tateti.js.map