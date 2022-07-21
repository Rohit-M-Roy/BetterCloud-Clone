
   

    let articleData=[
        {
            img: `https://www.bettercloud.com/wp-content/uploads/2022/07/HowtoKeepYourITEnvironmentSecurewithAutomatedOffboarding.png`,
            heading:`How to Keep Sensitive Data Safe with Automated Offboarding`,
            per:`Today’s employees have far more access to company data than ever before. As the number of SaaS apps in use grows, so does the amount`,
            name:`MONDIE SELLARS`,
            read:`7 MINUTE READ`
        },
        {
            img: `https://www.bettercloud.com/wp-content/uploads/2022/07/HowToAutomateFileSecurity.png`,
              heading:`How to Automate File Security in a SaaS Management Platform`,
             
              per:`SaaS applications for file sharing—Google Workspace, Box, Dropbox, OneDrive, and more—have made collaborating easier than ever. Remote employees can connect via shared files across time.......`,
              name: `MONDIE SELLARS`,
              read:`6 MINUTE READ`    
            },
            {
                img: `https://www.bettercloud.com/wp-content/uploads/2022/07/HowtoKeepYourITEnvironmentSecurewithAutomatedOffboarding.png`,
                heading:`How to Keep Sensitive Data Safe with Automated Offboarding`,
                per:`Today’s employees have far more access to company data than ever before. As the number of SaaS apps in use grows, so does the amount`,
                name:`MONDIE SELLARS`,
                read:`7 MINUTE READ`
            },
            {
                img: `https://www.bettercloud.com/wp-content/uploads/2022/07/HowToAutomateFileSecurity.png`,
                  heading:`How to Automate File Security in a SaaS Management Platform`,
                 
                  per:`SaaS applications for file sharing—Google Workspace, Box, Dropbox, OneDrive, and more—have made collaborating easier than ever. Remote employees can connect via shared files across time....`,
                  name: `MONDIE SELLARS`,
                  read:`6 MINUTE READ`    
                },
                {
                    img: `https://www.bettercloud.com/wp-content/uploads/2022/07/HowtoKeepYourITEnvironmentSecurewithAutomatedOffboarding.png`,
                    heading:`How to Keep Sensitive Data Safe with Automated Offboarding`,
                    per:`Today’s employees have far more access to company data than ever before. As the number of SaaS apps in use grows, so does the amount`,
                    name:`MONDIE SELLARS`,
                    read:`7 MINUTE READ`
                },
                {
                    img: `https://www.bettercloud.com/wp-content/uploads/2022/07/HowToAutomateFileSecurity.png`,
                      heading:`How to Automate File Security in a SaaS Management Platform`,
                     
                      per:`SaaS applications for file sharing—Google Workspace, Box, Dropbox, OneDrive, and more—have made collaborating easier than ever. Remote employees can connect via shared files across time......`,
                      name: `MONDIE SELLARS`,
                      read:`6 MINUTE READ`    
                    },
                    {
                        img: `https://www.bettercloud.com/wp-content/uploads/2022/07/HowtoKeepYourITEnvironmentSecurewithAutomatedOffboarding.png`,
                        heading:`How to Keep Sensitive Data Safe with Automated Offboarding`,
                        per:`Today’s employees have far more access to company data than ever before. As the number of SaaS apps in use grows, so does the amount`,
                        name:`MONDIE SELLARS`,
                        read:`7 MINUTE READ`
                    },
                    {
                        img: `https://www.bettercloud.com/wp-content/uploads/2022/07/HowToAutomateFileSecurity.png`,
                          heading:`How to Automate File Security in a SaaS Management Platform`,
                         
                          per:`SaaS applications for file sharing—Google Workspace, Box, Dropbox, OneDrive, and more—have made collaborating easier than ever. Remote employees can connect via shared files across time.....`,
                          name: `MONDIE SELLARS`,
                          read:`6 MINUTE READ`    
                        },
                        {
                            img: `https://www.bettercloud.com/wp-content/uploads/2022/07/HowtoKeepYourITEnvironmentSecurewithAutomatedOffboarding.png`,
                            heading:`How to Keep Sensitive Data Safe with Automated Offboarding`,
                            per:`Today’s employees have far more access to company data than ever before. As the number of SaaS apps in use grows, so does the amount`,
                            name:`MONDIE SELLARS`,
                            read:`7 MINUTE READ`
                        },
                        {
                            img: `https://www.bettercloud.com/wp-content/uploads/2022/07/HowToAutomateFileSecurity.png`,
                              heading:`How to Automate File Security in a SaaS Management Platform`,
                             
                              per:`SaaS applications for file sharing—Google Workspace, Box, Dropbox, OneDrive, and more—have made collaborating easier than ever. Remote employees can connect via shared files across time........`,
                              name: `MONDIE SELLARS`,
                              read:`6 MINUTE READ`    
                            },
                            {
                                img: `https://www.bettercloud.com/wp-content/uploads/2022/07/HowtoKeepYourITEnvironmentSecurewithAutomatedOffboarding.png`,
                                heading:`How to Keep Sensitive Data Safe with Automated Offboarding`,
                                per:`Today’s employees have far more access to company data than ever before. As the number of SaaS apps in use grows, so does the amount.....`,
                                name:`MONDIE SELLARS`,
                                read:`7 MINUTE READ`
                            },
                            {
                                img: `https://www.bettercloud.com/wp-content/uploads/2022/07/HowToAutomateFileSecurity.png`,
                                  heading:`How to Automate File Security in a SaaS Management Platform`,
                                 
                                  per:`SaaS applications for file sharing—Google Workspace, Box, Dropbox, OneDrive, and more—have made collaborating easier than ever. Remote employees can connect via shared files across time......`,
                                  name: `MONDIE SELLARS`,
                                  read:`6 MINUTE READ`    
                                },
                
                
    ]
    
    
    
    
    
    function displayArticles(articleData){
        let articles=document.getElementById("articles")
      
        articleData.forEach(function (element){
    let div1=document.createElement("div");
            div1.setAttribute("class","div1")
    let avatar=document.createElement("img");
    avatar.src=element.img;
    div1.append(avatar)
    let div2=document.createElement("div");
    div2.setAttribute("class","div2");
    
    let h1=document.createElement("h3");
    h1.innerText=element.heading;
    let p1=document.createElement("p");
    p1.innerText=element.per;
    let p2=document.createElement("p");
    p2.innerText=element.name;
    let p3=document.createElement("p");
    p3.innerText=element.read;
    let div3=document.createElement("div");
    div3.setAttribute("class","div3")
    div3.append(p2,p3)
    div2.append(h1,p1)
    let text_div=document.createElement("div");
    text_div.setAttribute("class","text_div");
    text_div.append(div2,div3)
    let main_div=document.createElement("div");
    main_div.setAttribute("class","main_div")
    main_div.append(div1,text_div);
    articles.append(main_div)
    })
    
    }
    displayArticles(articleData)