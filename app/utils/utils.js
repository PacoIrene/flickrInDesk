import _ from 'lodash';


/**
 * 要返回的hosts的示例
 *
 * const results = {
 *   comment: '', // hosts文件上面的一坨评论
 *   hosts: [
 *     {
 *       ip: '127.0.0.1',
 *       url: 'www.baidu.com',
 *       isCommented: '0'  // 是否处于注释的状态
 *     }
 *   ]
 * };
 */
export function analysizeHost (host) {
  let hosts = host.split('\n');
  const pattern = /^\s*[#|\s*]\s*[\d+|.]+[\w+|.]*/;
  const pairedHosts = _.filter(hosts, host => {
    const matches = pattern.exec(host);
    return matches; 
  });
  _.forEach(pairedHosts, host => {
    console.log(host);
  });
}
