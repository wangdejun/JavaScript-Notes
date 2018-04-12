async function main(){
    const myModule = await import('./myModule.js');
    const {export1, export2} = await import('./myModule.js');
    const [module1, module2, module3] = await Promise.all([
        import('./module1.js'),
        import('./module2.js'),
        import('./module3.js'),                
    ])
}