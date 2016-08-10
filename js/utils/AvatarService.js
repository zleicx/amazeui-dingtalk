// @via https://github.com/noonnightstorm/dd-avatar/blob/master/src/index.js

function _isEnglish(name) {
  return name.match(/^([a-zA-Z]|\s|,|\.)+$/) !== null;
}

const colors = ['#78c06e', '#f65e8d', '#f6bf26', '#f65e5e', '#5e97f6', '#9a89b9', '#a1887f', '#ff943e', '#5ec9f6', '#3bc2b5', '#5c6bc0', '#bd84cd', '#6bb5ce', '#c5cb63', '#ff8e6b', '#78919d'];
const colorsLength = colors.length;

var AvatarService = {
  getAvatar(nick, name) {
    name = this._getShowName(nick || name);
    let color = this._getColor(name);

    return {
      name,
      color,
    };
  },

  _getShowName(name) {
    let showName = name || '',
      arr = [];

    if (_isEnglish(showName)) {
      // 将“,.”转为空格，如果导致出现连续空格（如原字符为", "，则转换后会为"  "），
      // 则将连续空格转换为单个空格
      showName = showName.replace(/,|\./g, ' ').replace(/\s+/g, ' ');

      arr = showName.split(' ');

      if (arr.length === 1) {
        return showName.slice(0, 2);
      }

      return arr[0].slice(0, 1) + arr[1].slice(0, 1);
    }

    return showName.replace(/,|\.|\s+/g, '').slice(-2);
  },

  _getColor: function(name) {
    let total = 0;
    let char;

    for (char in name) {
      total += name.charCodeAt(char);
    }

    return colors[total % colorsLength];
  }
};

export default AvatarService;