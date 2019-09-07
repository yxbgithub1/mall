import React from 'react'

/**
 * Screen基础类，提供全局导航、token服务
 * @export
 * @class Base
 * @extends {React.Component}
 */
export default class Base extends React.Component {
    navigationPush = router => {
        this.props.navigation.navigate(router)
    }
    /** 登录token */
    get token() {
        return 1
    }
}
