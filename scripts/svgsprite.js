const svgstore = require('svgstore');
const fs = require('fs');
const path = require('path');
const svgPath = path.resolve(__dirname, '../src/components/svg')

const fileNames = fs
    .readdirSync(`${svgPath}/icons`)
    .map((fileName) => {
        const res = fileName.match(/([A-Za-z0-9-_]+)\./i);
        let name = res[1];

        // replace: < > [space] ' "
        name = name.replace(/[<> '"]/g,'');
        return name;
    });

// https://www.npmjs.com/package/svgstore#svgstore-options
let sprites = svgstore({
    copyAttrs: true,
    svgAttrs: {
        width: '0',
        height: '0',
        style: 'display:none'
    }
});

fileNames.forEach((name) => {
    sprites.add(
        name,
        fs.readFileSync(`${svgPath}/icons/${name}.svg`),
        {
            symbolAttrs: {
                class: `m-svg-icon m-svg-icon-${name}`
            }
        }
    )
});

sprites = sprites.toString({
    inline: true
});


fs.writeFileSync(
    `${svgPath}/SvgSprite.vue`,
    `<template>${sprites}</template>`
);
