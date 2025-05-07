
const leftChevron = document.getElementById('left-chevron');
const rightChevron = document.getElementById('right-chevron');
const colorScaleContainer = document.getElementById('color-scale-container');
const imageGallery = document.getElementById('image-gallery');

const images = {
    color1: [
      "https://i.pinimg.com/736x/d2/4d/cf/d24dcf79e4f6ca9774dd23d6e6b6cccb.jpg",
      "https://i.pinimg.com/736x/91/02/49/910249fb576fd1c6e2544995cdcf60af.jpg",
      "https://i.pinimg.com/736x/7c/8e/a2/7c8ea21e4a6ceaf9c8d21a0fd62fcd0e.jpg",
      "https://i.pinimg.com/736x/4f/37/39/4f3739b8f080e05622b588a911541076.jpg",
      "https://i.pinimg.com/736x/b8/c1/05/b8c105151bcf5806b86427416c6bfb92.jpg",
      "https://i.pinimg.com/736x/52/c2/56/52c2569971362d01ee6c2be6a5bc6173.jpg",
      "https://i.pinimg.com/736x/1d/f4/1f/1df41f414db7de8027536d33f8adc1a7.jpg",
      "https://i.pinimg.com/736x/9c/aa/5b/9caa5bf5087eeb936495c923bcdbd77e.jpg",
      "https://i.pinimg.com/736x/02/bd/b5/02bdb5439febc6c926c9124b2a93332f.jpg",
      "https://i.pinimg.com/736x/92/21/be/9221bed492cd2a852c5aa941c7015e4e.jpg",
      "https://i.pinimg.com/736x/05/ff/df/05ffdf5d682cb81936960708ab4a5d35.jpg",
      "https://i.pinimg.com/736x/fd/a8/1d/fda81d31a1140abc00450599173dce2e.jpg",
      "https://cdn.cosmos.so/3f436153-76d6-462c-b991-b4782bfbd565?format=jpeg",
      "https://cdn.cosmos.so/208dbd5c-61ce-479f-aa32-e70ca651886b?format=jpeg",
      "https://i.pinimg.com/736x/86/0b/6d/860b6d25b8689305e21e2fdad92dc4ae.jpg",
      "https://i.pinimg.com/736x/1b/15/f6/1b15f609a22aec93b2753fb9d87bb740.jpg",
      "https://i.pinimg.com/736x/5f/b9/d0/5fb9d0131f26702ce2e818e7c70e4fe7.jpg",
      "https://i.pinimg.com/736x/4d/35/2c/4d352cab979a1b71edcf4a9525cca221.jpg",
      "https://i.pinimg.com/736x/61/78/9c/61789c210da06a68ae40eb3600e435dc.jpg",
      "https://cdn.cosmos.so/59058fa4-a35c-4687-8db3-7cb9a31a3fff?format=jpeg"
      
    ],
    color2: [
      "https://cdn.cosmos.so/5f20aebe-9461-4ee9-b9f5-f95d2a603fec?format=jpeg",
      "https://cdn.cosmos.so/47794b4a-6e5a-47b0-99d3-26014942a02b?format=jpeg",
      "https://cdn.cosmos.so/773b642b-c2c8-45ec-bba5-7d1da93cb2ec?format=jpeg",
      "https://cdn.cosmos.so/9ae44841-8287-425f-b126-e27f514ec329?format=jpeg",
      "https://i.pinimg.com/736x/5f/9f/9a/5f9f9aebee92c88d916137cafc717d4e.jpg",
      "https://cdn.cosmos.so/07bbfc67-4977-4bf3-bb6c-068d20765e15?format=jpeg",
      "https://i.pinimg.com/736x/56/60/d4/5660d487ea28e9204c599ce95743130e.jpg",
      "https://i.pinimg.com/736x/cd/c7/b4/cdc7b49646030125db4532e9218d4dac.jpg",
      "https://i.pinimg.com/736x/24/11/cf/2411cf38c230d991de4b2f9d66339f83.jpg",
      "https://i.pinimg.com/736x/fa/f7/05/faf70519e33fbc77f362207f4a05f80a.jpg",
      "https://i.pinimg.com/736x/20/a7/98/20a79833e719ff4b514c67a68f00d0a5.jpg",
      "https://i.pinimg.com/736x/55/fb/22/55fb2264ecb6b27e70a372adc0265aa2.jpg",
      "https://cdn.cosmos.so/15207d09-9980-44e9-bc34-a0156274ac32?format=jpeg",
      "https://i.pinimg.com/736x/63/88/41/638841ae0cc77ba4d50cbbc4cb968738.jpg",
      "https://i.pinimg.com/736x/be/e0/40/bee040a4607ea44489a0e8470d7a673b.jpg",
      "https://i.pinimg.com/736x/ef/5c/0e/ef5c0e1a6ba7e624f1aeb89e05207ebe.jpg",
      "https://i.pinimg.com/736x/53/4a/5d/534a5d9ca94289f68b369f9167564062.jpg",
      "https://cdn.cosmos.so/40b05659-431f-473c-962e-755e312b173d?format=jpeg",
      "https://cdn.cosmos.so/5b655cd7-8ae9-4520-a4e8-1f86419c7986?format=jpeg",
      "https://i.pinimg.com/736x/02/8c/cc/028ccc7945d5cd8a33b785da67e117d1.jpg",
      "https://i.pinimg.com/736x/ed/8c/93/ed8c93e955c0764b17d906b62f0dd50d.jpg",
      "https://i.pinimg.com/736x/08/c8/c5/08c8c5d6e3eb02ba8c85f664333740ea.jpg",
      "https://i.pinimg.com/736x/f5/d7/3b/f5d73b0751b1f2a0a566adc1f0bf62eb.jpg",
      "https://i.pinimg.com/736x/e9/60/88/e9608865b875f3981277775d7d6cb3ac.jpg"
    
      
    ],
    color3: [
      "https://i.pinimg.com/736x/23/d8/b3/23d8b370d19f46369ed7477c21c26829.jpg",
      "https://i.pinimg.com/736x/db/48/a9/db48a9b73a8c6f3dbb3cf9c40b91c36d.jpg",
      "https://i.pinimg.com/736x/0b/37/72/0b377202dd1f2786f073766d498d5d73.jpg",
      "https://cdn.cosmos.so/0efbcb84-0d5e-41ff-88f9-04597ba120c8?format=jpeg",
      "https://cdn.cosmos.so/96254bde-50e6-42cb-9b21-ceab020ecb02?format=jpeg",
      "https://i.pinimg.com/736x/0d/57/2e/0d572e4c0c06318635244c76e46cb42e.jpg",
      "https://i.pinimg.com/736x/53/5a/60/535a60196068bea3f303fac58c4c1fff.jpg",
      "https://i.pinimg.com/736x/e5/3f/b3/e53fb3e32bcbad2b3f743d8849e57f96.jpg",
      "https://i.pinimg.com/736x/ac/11/51/ac115142fc91a0a096b17aa402578388.jpg",
      "https://cdn.cosmos.so/e018295a-3dd4-49cd-acbb-46fe3684d239?format=jpeg",
      "https://cdn.cosmos.so/d78b3c1c-4fcc-4952-8149-04f0b495a012?format=jpeg",
      "https://i.pinimg.com/736x/48/cb/cc/48cbccb45f00b8317b4f43dff1dfc8cb.jpg",
      "https://i.pinimg.com/736x/d1/e5/08/d1e508f058a002098b66a8b95c33c0eb.jpg",
      "https://i.pinimg.com/736x/13/7e/c1/137ec1f8ef63bbfac9469336107d02be.jpg",
      "https://i.pinimg.com/736x/31/c2/6e/31c26ed7627a2bc0389ae1d9554081d6.jpg",
      "https://i.pinimg.com/736x/70/f2/fa/70f2fa0167dfcfaec82867002ca0dcd5.jpg"
    
    ],
    color4: [
      "https://i.pinimg.com/736x/32/e5/26/32e526279ee0de59aee74be118b5f7db.jpg",
      "https://i.pinimg.com/736x/52/8e/71/528e71b1d4faf6ca005a6325b71966af.jpg",
      "https://i.pinimg.com/736x/a9/b0/bb/a9b0bbe58cfc4497378817dc1f54efde.jpg",
      "https://i.pinimg.com/736x/d2/12/ad/d212adeeca72d072354da014bf88ab93.jpg",
      "https://i.pinimg.com/736x/f8/bd/bd/f8bdbd01ce34cd081692e0f88cf36e58.jpg",
      "https://i.pinimg.com/736x/6e/e9/4b/6ee94bdeb710794407c4a30943ce569b.jpg",
      "https://i.pinimg.com/736x/20/85/7b/20857b7d8a6041e04db0445c68d26bb5.jpg",
      "https://i.pinimg.com/736x/26/db/c7/26dbc707fbad881f6f0bcb6c02f03e96.jpg",
      "https://i.pinimg.com/736x/a7/a5/83/a7a58377ce53836e73a61c80d1d40eeb.jpg",
      "https://i.pinimg.com/736x/33/13/5c/33135c3999148f4b782d4a0c4e15d4ad.jpg",
      "https://i.pinimg.com/736x/2a/b6/3d/2ab63df30855d1119f739429c4224497.jpg",
      "https://i.pinimg.com/736x/7b/e5/cf/7be5cf9c7dc84e44d1c3a71b0c92a74b.jpg",
      "https://i.pinimg.com/736x/97/cf/01/97cf01d9a5ba21809bdbe510ebd0b923.jpg",
      "https://i.pinimg.com/736x/0c/1c/6f/0c1c6f5bb0758858ccd7b9565bfd0e6f.jpg",
      "https://i.pinimg.com/736x/14/2c/85/142c85c06e1be00b76c15299e3083628.jpg",
      "https://i.pinimg.com/736x/01/08/69/0108693c20adac9a0279c25c94a916f8.jpg"
      
    ],
    color5: [
      "https://i.pinimg.com/736x/84/13/5b/84135b500fa757f1f716f58d07eb41cc.jpg",
      "https://i.pinimg.com/736x/a3/8b/99/a38b997a418b34d8c8b1109cbac66c46.jpg",
      "https://i.pinimg.com/736x/53/15/c7/5315c72adb88a5ae3bbc2156fe600217.jpg",
      "https://i.pinimg.com/736x/c6/e7/dc/c6e7dcb75435875bc0a4670802ff5cfc.jpg",
      "https://i.pinimg.com/736x/3c/a3/46/3ca346ac0263d4bdb312d0160173fd16.jpg",
      "https://i.pinimg.com/736x/49/db/bc/49dbbc1b6c6159eec529095c0d522118.jpg",
      "https://i.pinimg.com/736x/8e/9b/84/8e9b844d054c74bc6bd232dcebb3942f.jpg",
      "https://i.pinimg.com/736x/38/db/f8/38dbf8acc9be3058132bc733fa6fd38f.jpg",
      "https://i.pinimg.com/736x/11/2e/b4/112eb44d2c0298afc223cc1b9d026587.jpg",
      "https://i.pinimg.com/736x/ac/f3/43/acf34388c4e744ede5b25852bea1096d.jpg",
      "https://i.pinimg.com/736x/7a/dd/40/7add40114af77c346b001108702f3d76.jpg",
      "https://i.pinimg.com/736x/6c/fb/ee/6cfbeede8beb8239136b794af80c90e0.jpg",
      "https://cdn.cosmos.so/96df9d64-ac98-4cef-88a2-2e9df3cb14b3?format=jpeg",
      "https://i.pinimg.com/736x/4d/f3/e1/4df3e1b573671b22e62cf4f851634ec4.jpg",
      "https://i.pinimg.com/736x/bb/b6/3f/bbb63fbe7db0effb649badfb4e7c98b2.jpg",
      "https://i.pinimg.com/736x/dc/49/db/dc49dbc7c698e4d52e4a9e472064caae.jpg"
    ],
    color6: [
      "https://i.pinimg.com/736x/45/92/cc/4592cc2d13b20a4b8babadccfa65e2e6.jpg",
      "https://i.pinimg.com/736x/09/f5/2c/09f52c33f9633b285a770e67b366555f.jpg",
      "https://i.pinimg.com/736x/80/6d/47/806d4778f819343e99c8e47251809477.jpg",
      "https://i.pinimg.com/736x/64/2b/af/642baf3bda91e8a449aa014fbbf672d0.jpg",
      "https://i.pinimg.com/736x/b1/a1/b8/b1a1b86193370500037f317583b89110.jpg",
      "https://i.pinimg.com/736x/e2/9b/ba/e29bba4d2dd0b5cc0f90843ef9124aa8.jpg",
      "https://i.pinimg.com/736x/87/bc/cd/87bccd0df0bc83e06c7fd0559fb183de.jpg",
      "https://i.pinimg.com/736x/9a/a0/4d/9aa04d3df945a877afe887114359d6a8.jpg",
      "https://i.pinimg.com/736x/3d/25/c8/3d25c8a49781c72243549b7e94f2870a.jpg",
      "https://i.pinimg.com/736x/01/ab/c0/01abc0dfa863470764b1a3e6c9b6a2d8.jpg",
      "https://i.pinimg.com/736x/1c/79/be/1c79be7bbb02962236e79dbc8124fed3.jpg",
      "https://i.pinimg.com/736x/ca/40/2b/ca402b9ab81163474c43dfed46cc008f.jpg",
      "https://i.pinimg.com/736x/a1/a4/65/a1a465da8535876865305aee8d8f5b93.jpg",
      "https://i.pinimg.com/736x/4b/89/2e/4b892eeb5407587c27b7ab81285075b9.jpg",
      "https://i.pinimg.com/736x/dc/2c/f9/dc2cf9c8f8093310736677e2792f006e.jpg",
      "https://i.pinimg.com/736x/8b/47/ca/8b47ca8f6a51c60ecac2a4d4dfc9b0da.jpg"
    ],
    color7: [
      "https://i.pinimg.com/736x/43/01/9e/43019efb54b41e180024f5c9f850ec48.jpg",
      "https://i.pinimg.com/736x/02/67/02/0267022613937dc53a4c88d713bd203c.jpg",
      "https://i.pinimg.com/736x/c3/aa/1a/c3aa1a5c46bb0a4c82a9ba9681940f03.jpg",
      "https://i.pinimg.com/736x/67/c5/e6/67c5e6f0d128f13e85a60a7685417ccb.jpg",
      "https://i.pinimg.com/736x/58/d8/a8/58d8a8873110b9e31061ef25b49c0329.jpg",
      "https://i.pinimg.com/736x/2a/b9/57/2ab95745293b550212d7d80a58e6ffc5.jpg",
      "https://i.pinimg.com/736x/05/a8/d4/05a8d4ae0b9a3e54bfe01d6f4e7cd31c.jpg",
      "https://i.pinimg.com/736x/87/ce/03/87ce03ab997b8aec911920fdb578db75.jpg",
      "https://cdn.cosmos.so/4850e6a8-17eb-4ee8-ac7b-1e0429d77a54?format=jpeg",
      "https://i.pinimg.com/736x/af/61/1b/af611ba32dd3c7596b9d07959bf559e1.jpg",
      "https://i.pinimg.com/736x/fe/d1/50/fed150d19f12af455a7a1aa4c723d703.jpg",
      "https://i.pinimg.com/736x/52/88/13/5288130dad0223dda85af0e8784592f4.jpg",
      "https://i.pinimg.com/736x/6a/85/98/6a85981f57095193ed32a5e480333d28.jpg",
      "https://i.pinimg.com/736x/a9/01/00/a901001ab323f85063564b5a28b01479.jpg",
      "https://i.pinimg.com/736x/1a/03/fc/1a03fce42d4704317f20938203ef4201.jpg",
      "https://i.pinimg.com/736x/6b/3f/6b/6b3f6bf0f0d841d9cd9c1bfccbba9c07.jpg"
    ],
    color8: [
      "https://i.pinimg.com/736x/3a/10/38/3a103867dadb68d8f27eefd48f72894b.jpg",
      "https://i.pinimg.com/736x/1c/ea/dd/1ceaddae3ed27ffd46db1db76b3d8fde.jpg",
      "https://i.pinimg.com/736x/de/81/7c/de817c5bb0c885861f3ce7dd01285151.jpg",
      "https://i.pinimg.com/736x/33/fa/e0/33fae033832eb62468bc7c1c066958e1.jpg",
      "https://i.pinimg.com/736x/06/86/99/06869979350dc7f67e1623f00a8e9f4c.jpg",
      "https://i.pinimg.com/736x/80/56/f5/8056f5a77c93f7b817016f943c7ae95e.jpg",
      "https://i.pinimg.com/736x/24/ba/0b/24ba0b478275bec3b5e199a14696366b.jpg",
      "https://i.pinimg.com/736x/13/cb/4a/13cb4a3da3a0af19ce0a8506b220ab87.jpg",
      "https://i.pinimg.com/736x/3a/bd/b4/3abdb4709fb605c7ee83467001fcd2b0.jpg",
      "https://i.pinimg.com/736x/74/cc/26/74cc26607dd89c9560dd7e2d9ccdc3e5.jpg",
      "https://i.pinimg.com/736x/b3/db/08/b3db087bce36c564a4f87c2c641d5d2e.jpg",
      "https://i.pinimg.com/736x/c9/2c/87/c92c87d8f51fe76f7f721a026e7efc1b.jpg",
      "https://i.pinimg.com/736x/9f/63/f9/9f63f9e18b5c7293c38bc9f867b66c48.jpg",
      "https://i.pinimg.com/736x/e1/e6/20/e1e6206e4736a3138ce318a079405b8d.jpg",
      "https://i.pinimg.com/736x/b6/fc/6b/b6fc6bbc13b09d00dae2701a48af893f.jpg",
      "https://i.pinimg.com/736x/ec/99/c6/ec99c685c0402c4d61aae54c6195eac7.jpg"
    ],
    color9: [
      "https://i.pinimg.com/736x/81/52/22/815222ac581b53467edeea2369094aab.jpg",
      "https://i.pinimg.com/736x/91/fd/39/91fd39b6b6ec5ca8dce9ae6daa39dfd9.jpg",
      "https://i.pinimg.com/736x/3b/81/12/3b8112062f8e1f9a6c8dcf9f865323ff.jpg",
      "https://i.pinimg.com/736x/6e/7a/14/6e7a14966e8c116fd5a7bb0ca52192c5.jpg",
      "https://i.pinimg.com/736x/ab/4d/37/ab4d372d4369157df2f83c27203a0832.jpg",
      "https://i.pinimg.com/736x/a1/f4/63/a1f463acbeab20fbc9db0c2ea733e8a6.jpg",
      "https://i.pinimg.com/736x/c7/fa/1d/c7fa1d9df8e293338f7a85f60997cc6e.jpg",
      "https://i.pinimg.com/736x/57/14/04/5714048f5a294fc5d8c23e4bb0a824f1.jpg",
      "https://i.pinimg.com/736x/ec/5a/14/ec5a140354b2a4a517b51d8ac777a4b1.jpg",
      "https://i.pinimg.com/736x/c3/f0/aa/c3f0aa676907f97bb830ddba78ee8d3b.jpg",
      "https://i.pinimg.com/736x/b5/79/f8/b579f8b21603201730ff39bfbeb67034.jpg",
      "https://i.pinimg.com/736x/7b/9c/df/7b9cdf260b9a51e62e01a4847655cbeb.jpg",
      "https://i.pinimg.com/736x/0f/4e/3b/0f4e3bb6c6e3009d6e08d60cd492c2d7.jpg",
      "https://i.pinimg.com/736x/d1/8a/90/d18a904e1fa8fb1f6de2ed4b918abebb.jpg",
      "https://i.pinimg.com/736x/86/82/74/86827411a0883fa83a3e7acf7514320b.jpg",
      "https://i.pinimg.com/736x/63/77/bf/6377bf03b315277d583b039597dfb4c9.jpg"
    ],
    color10: [
      "https://i.pinimg.com/736x/d6/cc/9b/d6cc9b935bc32e8a86f58763397858f7.jpg",
      "https://i.pinimg.com/736x/84/e9/5b/84e95b51f9328e92c53a5f8caed95deb.jpg",
      "https://i.pinimg.com/736x/5b/f7/aa/5bf7aa58f3ef89b9586577526c633faf.jpg",
      "https://i.pinimg.com/736x/07/ae/4a/07ae4aec24afe5c30281da1de39da2a6.jpg",
      "https://i.pinimg.com/736x/68/1b/e3/681be340db1323e4e8522d3b737ebc84.jpg",
      "https://i.pinimg.com/736x/32/0a/f2/320af2a0cf892082f709f5942058d6b2.jpg",
      "https://i.pinimg.com/736x/f0/a3/52/f0a352e5fee1b403e08995e65687dead.jpg",
      "https://i.pinimg.com/736x/bf/19/cd/bf19cd9eeaefb71b0e77ee7d5921d9e6.jpg",
      "https://i.pinimg.com/736x/6b/06/e4/6b06e4fc5b5ff7d12915510462519916.jpg",
      "https://i.pinimg.com/736x/2c/d5/60/2cd56064b5793a10cf1e98eb256f2ecd.jpg",
      "https://i.pinimg.com/736x/bd/13/7a/bd137a42038fb2c0b3f1b6d4e090c73b.jpg",
      "https://i.pinimg.com/736x/ba/d9/44/bad9443f8d54cadc3f04f87fa5253501.jpg",
      "https://i.pinimg.com/736x/ca/66/6d/ca666d4161db8ac2547adc29653be709.jpg",
      "https://i.pinimg.com/736x/92/16/9d/92169d4e91703c1f987b24e314d58eb4.jpg",
      "https://i.pinimg.com/736x/15/e0/6f/15e06fd64b857f192329fae843d18658.jpg",
      "https://i.pinimg.com/736x/ba/0d/50/ba0d5085af73fd490a1f268683a26c17.jpg"
    ],
    color11: [
      "https://i.pinimg.com/736x/26/42/c7/2642c767532e5a7cddd119c23a20c15c.jpg",
      "https://i.pinimg.com/736x/01/5c/be/015cbe1f7105ca9420859e258a760218.jpg",
      "https://i.pinimg.com/736x/45/c6/3e/45c63e4824bba76c8ec8ff57a51a6a03.jpg",
      "https://i.pinimg.com/736x/cc/26/7c/cc267c1d1123bc27e35af1c917109bf0.jpg",
      "https://i.pinimg.com/736x/9f/0f/3f/9f0f3f5b45066138291b62c5b6c5a06c.jpg",
      "https://i.pinimg.com/736x/09/99/81/099981115c34f1f6495ce84a65843a6d.jpg",
      "https://i.pinimg.com/736x/d2/12/a8/d212a8b69a73439221c4b7f965dae52d.jpg",
      "https://i.pinimg.com/736x/1e/86/ed/1e86ed63e5dbf26364d970ba7a18f746.jpg",
      "https://i.pinimg.com/736x/77/6a/ae/776aae09ea8967fdfc773f5044e58a2f.jpg",
      "https://i.pinimg.com/736x/9f/1b/68/9f1b68528c0bb5ad3a1eace5132765c6.jpg",
      "https://i.pinimg.com/736x/90/94/0b/90940b55c1a282a176cee79cf835a35e.jpg",
      "https://i.pinimg.com/736x/88/d9/15/88d91557a183b7814164ea755d42bb56.jpg",
      "https://i.pinimg.com/736x/af/04/bf/af04bfd6a0ebb4b9700f0b42a4b597de.jpg"
    ],
    color12: [
      "https://i.pinimg.com/736x/5c/1f/c9/5c1fc96523d7d389f0c20b1ae8f9d25e.jpg",
      "https://cdn.cosmos.so/6bb3ac64-eccd-4c6e-bc50-079c1e5053a0?format=jpeg",
      "https://i.pinimg.com/736x/68/eb/47/68eb479e8810b2be5e0a19f497279c37.jpg",
      "https://i.pinimg.com/736x/96/57/cd/9657cd79092dd500d8230f88e3c841b4.jpg",
      "https://i.pinimg.com/736x/2f/2a/5f/2f2a5f64798c71013a48185f26bb5ee0.jpg",
      "https://i.pinimg.com/736x/de/fe/0a/defe0a2965dd76694d3c6b99e02e798e.jpg",
      "https://i.pinimg.com/736x/16/13/f6/1613f69b5bd564533f39706b3c8a3abe.jpg",
      "https://i.pinimg.com/736x/6f/69/9d/6f699d4ee780547d9b565aeeacfeaa9c.jpg",
      "https://i.pinimg.com/736x/aa/e2/8d/aae28d5d6d48802b6985110a4368df90.jpg",
      "https://i.pinimg.com/736x/fe/b6/e5/feb6e5f8caccabe0dc92464353bf5c9c.jpg",
      "https://i.pinimg.com/736x/3c/e9/16/3ce91690f6734ca4cef2f30b9ac29d4f.jpg",
      "https://i.pinimg.com/736x/cf/db/15/cfdb15d68754bc2ab9d56bd960900a7e.jpg",
      "https://i.pinimg.com/736x/11/a6/a0/11a6a0a624c84bd2e95a306597c1e001.jpg",
      "https://i.pinimg.com/736x/2a/80/e4/2a80e442004e2743fd78c9e47d56ce7e.jpg",
      "https://i.pinimg.com/736x/65/30/52/653052ae39b2db7ddbe3b62df17ac46c.jpg",
      "https://i.pinimg.com/736x/02/57/6c/02576cb8027a773883757d719b713754.jpg"
    ]
  };
  
  
function loadImages(colorKey = "color1") {
  imageGallery.innerHTML = "";
  images[colorKey].forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    imageGallery.appendChild(img);
  });
}



leftChevron.onclick = () => {
  colorScaleContainer.scrollBy({ left: -200, behavior: 'smooth' });
};

rightChevron.onclick = () => {
  colorScaleContainer.scrollBy({ left: 200, behavior: 'smooth' });
};


document.querySelectorAll('.color-section').forEach(section => {
  section.addEventListener('click', () => {
    const colorKey = section.getAttribute("data-color");
    loadImages(colorKey);
  });
});


window.onload = () => {
  loadImages("color1");
};

