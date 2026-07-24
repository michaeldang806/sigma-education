const episodeCopy = {
  en: {
    back: "← ARC 01", fullscreen: "Full screen",
    series: "SIGMA BIOLOGY · ARC 01 · EPISODE 01",
    title: "WHAT IS LIFE?", subtitle: "The characteristics that distinguish living systems",
    p1_title: "HOOK", p1_body: "Fire uses energy. Crystals grow. Robots move. Why are they not alive?", p1_prompt: "What evidence would convince you?",
    p2_title: "DISCOVER", p2_body: "Life emerged from non-living chemistry, but living systems gained something remarkable: coordinated organization.",
    p3_title: "AHA MOMENT", p3_body: "Life is an organized, self-maintaining system.",
    p4_title: "CORE IDEA", p4_intro: "Living systems coordinate:", p4_1: "Organization", p4_2: "Metabolism", p4_3: "Homeostasis", p4_4: "Growth and response", p4_5: "Reproduction and evolution",
    p5_title: "COMPARE", living: "LIVING", living_body: "Cells work together, use energy, regulate internal conditions and carry genetic information.", nonliving: "NON-LIVING", nonliving_body: "May show one life-like trait, but not the coordinated system as a whole.",
    p6_title: "IB SKILL", p6_body: "Observe → question → test evidence → draw a justified conclusion.", p6_prompt: "Avoid deciding from one trait alone.",
    p7_title: "NEXT QUESTION", p7_body: "Viruses reproduce only inside host cells. Are they alive?",
    key_title: "KEY TAKEAWAY", key_body: "Life is defined by a coordinated system, not one isolated characteristic.",
    summary_title: "TODAY WE LEARNED", summary_body: "Organization + energy + regulation + information + evolution work together to make life possible.",
    next_title: "CONTINUE", next_body: "Return to the ARC roadmap",
    motto: "PEACEFUL MIND • KINDLY HEART • KEEP GROWING."
  },
  vi: {
    back: "← ARC 01", fullscreen: "Toàn màn hình",
    series: "SIGMA SINH HỌC · ARC 01 · TẬP 01",
    title: "SỰ SỐNG LÀ GÌ?", subtitle: "Những đặc điểm phân biệt hệ sống",
    p1_title: "KHỞI ĐỘNG", p1_body: "Lửa dùng năng lượng. Tinh thể lớn lên. Robot chuyển động. Vì sao chúng không sống?", p1_prompt: "Bằng chứng nào sẽ thuyết phục bạn?",
    p2_title: "KHÁM PHÁ", p2_body: "Sự sống xuất hiện từ hóa học vô sinh, nhưng hệ sống có một đặc tính phi thường: tổ chức phối hợp.",
    p3_title: "KHOẢNH KHẮC AHA", p3_body: "Sự sống là một hệ có tổ chức và có khả năng tự duy trì.",
    p4_title: "Ý TƯỞNG CỐT LÕI", p4_intro: "Hệ sống phối hợp:", p4_1: "Tổ chức", p4_2: "Trao đổi chất", p4_3: "Cân bằng nội môi", p4_4: "Sinh trưởng và đáp ứng", p4_5: "Sinh sản và tiến hóa",
    p5_title: "SO SÁNH", living: "VẬT SỐNG", living_body: "Các tế bào phối hợp, sử dụng năng lượng, điều hòa môi trường trong và mang thông tin di truyền.", nonliving: "VẬT KHÔNG SỐNG", nonliving_body: "Có thể biểu hiện một đặc điểm giống sự sống, nhưng không có toàn bộ hệ phối hợp.",
    p6_title: "KỸ NĂNG IB", p6_body: "Quan sát → đặt câu hỏi → kiểm tra bằng chứng → rút ra kết luận có cơ sở.", p6_prompt: "Không kết luận chỉ từ một đặc điểm.",
    p7_title: "CÂU HỎI TIẾP THEO", p7_body: "Virus chỉ sinh sản bên trong tế bào chủ. Chúng có sống không?",
    key_title: "ĐIỀU CỐT LÕI", key_body: "Sự sống được xác định bởi một hệ phối hợp, không phải một đặc điểm riêng lẻ.",
    summary_title: "HÔM NAY TA ĐÃ HỌC", summary_body: "Tổ chức + năng lượng + điều hòa + thông tin + tiến hóa phối hợp để tạo nên sự sống.",
    next_title: "TIẾP TỤC", next_body: "Quay lại lộ trình ARC",
    motto: "TÂM AN • TIM NHÂN ÁI • KHÔNG NGỪNG TRƯỞNG THÀNH."
  }
};

const setLanguage = (language) => {
  const copy = episodeCopy[language] || episodeCopy.en;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = copy[node.dataset.i18n];
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === language));
  });
  localStorage.setItem("sigma-language", language);
};

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

document.getElementById("fullscreen-button").addEventListener("click", async () => {
  const artboard = document.querySelector(".template-artboard");
  if (!document.fullscreenElement) await artboard.requestFullscreen();
  else await document.exitFullscreen();
});

setLanguage(localStorage.getItem("sigma-language") || "en");
