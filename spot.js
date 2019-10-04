(function() {
    'use strict';

    var canvas = document.getElementById('canvas');

    var engine = new Shape.Engine(canvas);
    var promise = new Promise((resolve) => { resolve(); });
    
    document.getElementById('go').addEventListener('click', start);
    
    function start() {
        document.getElementById('go').removeEventListener('click', start);
        promise.then(() =>engine.toText('泽华 '))

        .then(() => engine.shake())

         .then(() => engine.toText('YOU '))

        .then(() => engine.shake())

        .then(() => engine.toText('ARE '))

        .then(() => engine.shake())

        .then(() => engine.toText('MY'))

        .then(() => engine.shake())

        .then(() => engine.toText('Angel '))

        .then(() => engine.shake())

        .then(() => engine.toText('I'))

        .then(() => engine.shake())

        .then(() => engine.toText('DONT'))

        .then(() => engine.shake())

        .then(() => engine.toText('MISS'))

        .then(() => engine.shake())

        .then(() => engine.toText('YOU'))

        .then(() => engine.shake())

        .then(() => engine.toText('2019.10.05'))

        .then(() => engine.shake())

        .then(() => engine.clear())
        .then(() => document.getElementById('go').addEventListener('click', start));
    }
})();
