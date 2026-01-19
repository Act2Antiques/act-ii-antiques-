const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

module.exports = function() {
  const contentDir = path.join(__dirname, '..', '_content');
  const pages = {};

  const files = ['homepage.md', 'about.md', 'contact.md'];

  files.forEach(file => {
    const filePath = path.join(contentDir, file);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      const parsed = matter(content);
      const name = file.replace('.md', '');
      pages[name] = parsed.data;
    }
  });

  return pages;
};
