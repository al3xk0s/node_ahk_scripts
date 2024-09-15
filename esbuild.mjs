import * as esbuild from 'esbuild';

const buildBundle = (entryPoint, out) => esbuild.buildSync({
    minify: true,
    bundle: true,    
    entryPoints: [
        entryPoint,
    ],
    outfile: out,
    platform: 'node',    
    external: [
        '@suchipi/node-mac-permissions',
        'suchibot',
        'esbuild',
    ]
});

const buildBundles = (bundles) => bundles.forEach(([file, out]) => {
    buildBundle(file, out)
});

buildBundles([
    [ './src/summer/fitness.ts', 'dist/summer/fitness.js' ],
    [ './src/summer/summer.ts', 'dist/summer/summer.js' ],
    [ './src/common/mouseTick.ts', 'dist/common/mouseTick.js' ],
    [ './src/common/sidSlide.ts', 'dist/summer/sidSlide.js' ],
]);
