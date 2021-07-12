var yufeng727 = function () {
  function chunk(array, size) {
    var result = []
    var arr = []
    var count = 0
    for (var i = 0; i < arr.length; i++) {
      arr.push(array[i])
      count++
      if (count == size) {
        result.push(arr)
        arr = []
        count = 0
      }
    }
    if (arr.length > 0) {
      result.push(arr)
    }
    return result
  }

  function concat(array) {
    var temp = []
    for (var i = 0; i < this.length; i++) {
      temp[i] = this[i];
    }
    for (var i = 0; i < array.length; i++) {
      temp.push(array[i])
    }
    return temp
  }

  function reverse(array) {
    var temp = []
    for (var i = array.length - 1; i >= 0; i--) {
      temp[temp.length] = array[i]
    }
    for (var j = 0; j < temp.length; j++) {
      array[j] = temp[j]
    }
  }

  function uniq(array) {
    for (var i = 0; i < array.length; i++) {
      for (var j = i + 1; j < array.length; j++) {
        if (array[i] == array[j]) {
          var del = j
          array.splice(del, 1)
        }
      }
    }
    return array
  }

  return {
    chunk: chunk,
    concat: concat,
    reverse: reverse,
    uniq: uniq,
  }
}()
