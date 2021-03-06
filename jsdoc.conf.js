module.exports = {
    opts: {
        access: 'public',
        destination: 'dist/docs/public',
        tutorials: 'tutorials',
        recurse: true
    },
    source: {
        include: ['src'],
        exclude: ['src/vendor']
    },
    templates: {
        default: {
            outputSourceFiles: false,
            staticFiles: {
                include: ['./tutorials/static']
            }
        }
    }
};
