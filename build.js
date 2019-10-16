const md = new require('markdown-it')()
const { readdir, readFile, readFileSync, fstat, writeFile } = require('fs')
const { spawn } = require('child_process')
const markdownItAttrs = require('markdown-it-attrs');
 
md.use(markdownItAttrs, {
  // optional, these are default options
  leftDelimiter: '{',
  rightDelimiter: '}',
  allowedAttributes: []  // empty array = all attributes are allowed
});

md.use(require('markdown-it-container'), 'spoiler', {

    validate: function(params) {
      return params.trim().match(/^spoiler\s+(.*)$/);
    },
  
    render: function (tokens, idx) {
      var m = tokens[idx].info.trim().match(/^spoiler\s+(.*)$/);
  
      if (tokens[idx].nesting === 1) {
        // opening tag
        return '<details><summary>' + md.utils.escapeHtml(m[1]) + '</summary>\n';
  
      } else {
        // closing tag
        return '</details>\n';
      }
    }
});

const { log, error } = console
const header = readFileSync('./src/header.html').toString()
const footer = readFileSync('./src/footer.html').toString()

function compilePage(route) {
    log(`Building page ${route}`)
    readFile(`pages/${route}`, (err, data) => {
        if (err) { error(err) }
        const html = md.render(data.toString());
        writeFile(`dist/${route.split('.')[0]}.html`, header + html + footer, (err) => {
            if (err) { error(err); return }
            log(`${route} page compiled`)
        })
    })
}

function build() {
    log('Copying media')
    spawn('mkdir', ['dist'])
    spawn('cp', ['-r', './assets', './dist/.'])
    readdir('pages', (err, pages) => {
        if (err) { error(err) }
        pages.forEach(compilePage)
    })
}

build()