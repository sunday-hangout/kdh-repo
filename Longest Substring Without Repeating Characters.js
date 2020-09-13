/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var answer = "", temp = "";
    for (var i = 0; i < s.length; i++)
    {
        var pos;
        if ((pos = temp.indexOf(s.charAt(i))) != -1)
        {
            if (answer.length < temp.length)
                answer = temp;
            temp = temp.substring(pos + 1, temp.length);
        }
        temp = temp.concat(s.charAt(i));
    }
    
    if (answer.length < temp.length)
        return temp.length;
    else
        return answer.length;
};
