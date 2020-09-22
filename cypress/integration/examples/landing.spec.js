/// <reference types="cypress" />

// const { first } = require("cypress/types/lodash");

context('Landing page', () => {
    beforeEach(() => {
        cy.visit('http://test-web.makeblock.com/edu/index.html')
    })
    // it('successfully loads', () => {
    //     cy.get('.antd-pro-components-global-header-index-loginBtn').click().then(() => {
    //         cy.wait(2000)
    //         cy.get('iframe.antd-pro-components-login-passport-modal-style-iframe').then($iframe=>{
    //             cy.wrap($iframe.contents().find('#account')).then($user=>{
    //                 cy.wrap($user).type("steamedu.list@makeblock.com")
    //             })
    //             cy.wrap($iframe.contents().find('#password')).then(passport=>{
    //                 cy.wrap(passport).type("123456")
    //             })
    //             cy.wrap($iframe.contents().find('.mbtn-primary')).then(login=>{
    //                 cy.wrap(login).first().click()
    //             })
    //     });
    //     })
    //   })


    // it('should login', () => {
    //     cy.get('#account').type('steamedu.list@makeblock.com');
    //     cy.get('#password').type('123456')
    // })
    it('set utoken', () => {
        cy.setCookie('utoken', 'Irj9rWgD')
        cy.reload().then(() => {
            cy.get('.antd-pro-components-global-header-index-entryBtn').click()
            cy.get('ul[role="menu"]').then( async (menu) => {
                // 管理上课流程

                await cy.wrap(menu).contains('资源管理').click()
                await cy.wrap(menu).contains('管理上课流程').click()

                // 新建
                await cy.contains('新建上课流程').click()
                await cy.get('.ant-modal-wrap input[placeholder="请输入上课流程名称"]').type('自动化输入上课流程')
                await cy.get('.ant-modal-wrap').contains('保 存').click()


                await cy.contains('管理内容').first().click()
                await cy.contains('新建流程').click()
                await cy.get('.ant-modal-wrap input[placeholder="请输入流程名称，限定1-10字符"]').type('自动化输入流程')
                await cy.get('.ant-modal-wrap input[placeholder="限定1-60"]').type('23')
                await cy.get('.ant-modal-wrap textarea[placeholder="请输入针对该流程的流程目标"]').type('自动化流程目标')
                await cy.get('.ant-modal-wrap').contains('保 存').click()

                await cy.get('.antd-pro-pages-repository-period-content-management-components-process-process-list-selectedItem .ant-dropdown-trigger').click()



            })
        })
    })

})