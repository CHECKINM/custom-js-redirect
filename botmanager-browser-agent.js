
// 중간 패치본: 감지 로직 제거, 기본 구조 유지
(function(){
    window.alert("patched");

    // 원래 감지 및 리디렉션 루프 제거됨
    // 원본 기능 중 사용자에게 꼭 필요한 기능만 보존
    
    // 기본 config는 유지
    const config = {
        tenantId: "",
        domainName: "",
        serverUrl: "",
        detectOnLoad: false,
        detectDevTools: false,
        detectClickBehavior: false,
        redirectOnLocation: false,
        networkTimeout: 3000,
        useMainDomain: true,
        logging: false
    };

    // 최소한의 인터페이스 제공
    window.BotManager = {
        initialize: true,
        getVersion: () => "patched-custom",
        detectPage: () => {},
        setCustomId: () => {},
    };

    // 더 이상 감지 모듈을 실행하지 않음
    // 기존의 감지 로직(DOM 검출, 디버거 감지, etc.)은 모두 제거됨
})();
