angular.module('ui.bootstrap.multiMap', [])
    /**
     * A helper, internal data structure that stores all references attached to key
     */
    .factory('$$multiMap', function() { //生成一个map数据结构用来保存
        return {
            createNew: function() {
                var map = {}; //内部数据，声明周期是整个app的声明周期，用来保存数据

                return {
                    entries: function() { //生成一个map数据结构
                        return Object.keys(map).map(function(key) { //Object.keys(keys)返回keys上的所有属性和方法
                            return {
                                key: key,
                                value: map[key]
                            };
                        });
                    },
                    get: function(key) { //get 获取map上对应key的value
                        return map[key];
                    },
                    hasKey: function(key) { //判断map数据结构上是否有key
                        return !!map[key]; //把!!强制转换为布尔类型
                    },
                    keys: function() { //返回map数据结构上的所有属性和方法
                        return Object.keys(map);
                    },
                    put: function(key, value) { //把key-value放入map
                        if (!map[key]) {
                            map[key] = []; //一个key可以对应多个value
                        }

                        map[key].push(value);
                    },
                    remove: function(key, value) { // 移除key-vaue值
                        var values = map[key];

                        if (!values) {
                            return;
                        }

                        var idx = values.indexOf(value);

                        if (idx !== -1) {
                            values.splice(idx, 1);
                        }

                        if (!values.length) {
                            delete map[key];
                        }
                    }
                };
            }
        };
    });