$(document).ready(function(){var e=site_base_url+"signature/course/"+spark_class_short_name+"/"+spark_class_id;jQuery.getJSON(spark_signature_url+"api/site/status",function(a){1==a.enabled&&jQuery.getJSON(spark_signature_url+"api/user/status",function(t){if(1===a.sign_up_now&&0===t.signature_track){1!=window.Cookie.get("spark_signaturetrack_hide")&&($(".course-topbanner-logo-image").css("top","+=40"),$(".course-topbanner-logo-name").css("top","+=40"),$("body").prepend("<div class='course-signaturetrack-topbanner'>  <span class='course-signaturetrack-topbanner-close'>    <a href='#'>&times;</a>  </span>  <span class='course-signaturetrack-topbanner-text'>    Join the Signature Track  </span>  <span class='course-signaturetrack-topbanner-button'>    <a target='_new' href='"+e+"'>Learn More!</a>"+"  </span>"+"</div>"),$(".course-signaturetrack-topbanner-close").click(function(){$(".course-signaturetrack-topbanner").hide(),window.Cookie.set("spark_signaturetrack_hide",1,{expires:new Date("2020"),path:spark_class_url})}));var r=function(e){return $('<div class="modal coursera-signature-modal-container">  <div class="coursera-signature-modal-header modal-header">    <button class="close modal-close" aria-hidden="true">&times;</button>    <img class="coursera-signature-modal-ribbon" src="'+e.ribbon+'" />'+'    <p class="coursera-signature-modal-signature-track">Signature Track</p>'+'    <p class="coursera-signature-modal-title">'+e.timeLeft+" left to join!</p>"+"  </div>"+'  <div class="coursera-signature-modal-body modal-body" style="margin-left: 50px; margin-right: 50px;">'+"    <p>Hi "+e.studentName+",</p>"+"    <p></p>"+"    <p>We are really glad to see you in "+e.courseName+"! You've been invited to join the Signature Track, which allows you to earn a Verified Certificate for this course.</p>"+"    <p>Through this special option, you will be able to certify your success in this course by securely linking your coursework to your identity using your unique typing pattern and webcam.</p>"+'    <div style="text-align: center">'+'      <button class="btn coursera-signature-next-button course-signaturetrack-modal-learnmore">'+"        Learn More"+"      </button>"+"    </div>"+'    <div class="course-signaturetrack-modal-nothanks">'+'      <a href="javascript:void(0)">Not now</a>'+"    </div>"+'    <p style="font-size: 12px">Note: Joining the Signature Track is optional, you can still complete the course if you decide not to join.</p>'+"  </div>"+"</div>")};if(a.last_chance_dialog&&!t.last_chance_modal){var s=r({ribbon:site_static_asset_url+"/pages/signature/views/ribbon_stripes.png",timeLeft:a.duration_left,courseName:course_strings_name,studentName:student_full_name}),i=new Modal(s,{"overlay.class":"coursera-signature-modal-overlay-darker","bind.close":!1});i.on("open",function(){$(".modal-close").on("click",function(){i.close()}),$(".course-signaturetrack-modal-nothanks a").on("click",function(){i.close()}),$(".course-signaturetrack-modal-learnmore").on("click",function(){window.open(e),i.close()})}),i.on("close",function(){$.get(spark_signature_url+"api/user/set_last_chance")}),i.open()}}else if(1===t.signature_track){var o=$('<div class="course-signaturetrack-status-modal-container"><h1>Signature Track Status</h1></div>');new Modal(o,{"overlay.class":"course-modal-overlay"})}})})});