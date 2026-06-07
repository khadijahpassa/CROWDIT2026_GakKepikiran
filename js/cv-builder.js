// Memanggil fungsi updateAllPreviews() saat halaman dimuat untuk menampilkan konten awal
document.addEventListener('DOMContentLoaded', updateAllPreviews);

// Menambahkan event listeners untuk form personal info
document.getElementById("fullName").addEventListener("input", updateAllPreviews);
document.getElementById("email").addEventListener("input", updateAllPreviews);
document.getElementById("phone").addEventListener("input", updateAllPreviews);
document.getElementById("location").addEventListener("input", updateAllPreviews);
document.getElementById("website").addEventListener("input", updateAllPreviews);
document.getElementById("linkedin").addEventListener("input", updateAllPreviews);
document.getElementById("summary").addEventListener("input", updateAllPreviews);

// Add Experience
document.getElementById("addExperience").addEventListener("click", () => {
    const experienceList = document.getElementById("experienceList");
    const experienceCount = experienceList.children.length + 1;
    const newExperienceDiv = document.createElement("div");
    newExperienceDiv.classList.add("experience-form", "border", "p-3", "rounded", "mb-3");

    newExperienceDiv.innerHTML = `
        <div class="d-flex justify-content-between align-items-center mb-3">
            <h6 class="mb-0 fw-bold">Experience #${experienceCount}</h6>
            <button class="btn btn-danger btn-sm remove-experience">
                <i class="bx bx-trash"></i>
            </button>
        </div>
        <div class="row g-3">
            <div class="col-md-6">
                <label for="position-${experienceCount}" class="form-label">Posisi</label>
                <input type="text" class="form-control exp-position" id="position-${experienceCount}" placeholder="Software Engineer">
            </div>
            <div class="col-md-6">
                <label for="company-${experienceCount}" class="form-label">Perusahaan</label>
                <input type="text" class="form-control exp-company" id="company-${experienceCount}" placeholder="Tech Corp">
            </div>
            <div class="col-md-6">
                <label for="location-${experienceCount}" class="form-label">Lokasi</label>
                <input type="text" class="form-control exp-location" id="location-${experienceCount}" placeholder="Onsite">
            </div>
            <div class="col-md-6">
                <label for="startDate-${experienceCount}" class="form-label">Tanggal Mulai</label>
                <input type="date" class="form-control exp-start-date" id="startDate-${experienceCount}">
            </div>
            <div class="col-md-6">
                <label for="endDate-${experienceCount}" class="form-label">Tanggal Selesai</label>
                <input type="date" class="form-control exp-end-date" id="endDate-${experienceCount}">
            </div>
            <div class="col-md-6 form-check d-flex align-items-center mt-4">
                <input type="checkbox" class="form-check-input exp-current-job me-2" id="currentJob-${experienceCount}">
                <label class="form-check-label" for="currentJob-${experienceCount}">Aku masih bekerja di sini</label>
            </div>
            <div class="col-12">
                <label for="description-${experienceCount}" class="form-label">Deskripsi</label>
                <textarea class="form-control exp-description" id="description-${experienceCount}" rows="3" placeholder="Jelaskan tanggung jawab & pencapaian kamu di sini..."></textarea>
            </div>
        </div>
    `;

    experienceList.appendChild(newExperienceDiv);
    newExperienceDiv.querySelector('.remove-experience').addEventListener("click", () => {
        newExperienceDiv.remove();
        updateAllPreviews();
    });
    const currentJobCheckbox = newExperienceDiv.querySelector(`#currentJob-${experienceCount}`);
    const endDateInput = newExperienceDiv.querySelector(`#endDate-${experienceCount}`);
    currentJobCheckbox.addEventListener('change', () => {
        if (currentJobCheckbox.checked) {
            endDateInput.disabled = true;
            endDateInput.value = '';
        } else {
            endDateInput.disabled = false;
        }
    });
    newExperienceDiv.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('input', updateAllPreviews);
    });
    updateAllPreviews();
});

// Add Education
document.getElementById("addEducation").addEventListener("click", () => {
    const educationList = document.getElementById("educationList");
    const educationCount = educationList.children.length + 1;
    const newEducationDiv = document.createElement("div");
    newEducationDiv.classList.add("education-form", "border", "p-3", "rounded", "mb-3");
    newEducationDiv.innerHTML = `
        <div class="d-flex justify-content-between align-items-center mb-3">
            <h6 class="mb-0 fw-bold">Education #${educationCount}</h6>
            <button class="btn btn-danger btn-sm remove-education">
                <i class="bx bx-trash"></i>
            </button>
        </div>
        <div class="row g-3">
            <div class="col-md-6">
                <label for="degree-${educationCount}" class="form-label">Jurusan</label>
                <input type="text" class="form-control edu-degree" id="degree-${educationCount}" placeholder="Software Engineering">
            </div>
            <div class="col-md-6">
                <label for="institution-${educationCount}" class="form-label">Institusi</label>
                <input type="text" class="form-control edu-institution" id="institution-${educationCount}" placeholder="SMK IDN">
            </div>
            <div class="col-md-6">
                <label for="location-${educationCount}" class="form-label">Lokasi</label>
                <input type="text" class="form-control edu-location" id="location-${educationCount}" placeholder="Bogor, Jawa Barat">
            </div>
            <div class="col-md-6">
                <label for="graduationDate-${educationCount}" class="form-label">Tanggal Lulus</label>
                <input type="date" class="form-control edu-grad-date" id="graduationDate-${educationCount}">
            </div>
            <div class="col-12">
                <label for="gpa-${educationCount}" class="form-label">GPA (Opsional)</label>
                <input type="text" class="form-control edu-gpa" id="gpa-${educationCount}" placeholder="3.8">
            </div>
        </div>
    `;

    educationList.appendChild(newEducationDiv);
    newEducationDiv.querySelector('.remove-education').addEventListener("click", () => {
        newEducationDiv.remove();
        updateAllPreviews();
    });
    newEducationDiv.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', updateAllPreviews);
    });
    updateAllPreviews();
});

// Add Skill
document.getElementById("addSkill").addEventListener("click", () => {
    const skillsList = document.getElementById("skillsList");
    const skillCount = skillsList.children.length + 1;
    const newSkillDiv = document.createElement("div");
    newSkillDiv.classList.add("skill-form-row", "row", "g-2", "mb-3", "border", "p-3", "rounded", "align-items-center");

    newSkillDiv.innerHTML = `
        <div class="col-md-5">
            <label for="skillName-${skillCount}" class="form-label mb-1">Skill #${skillCount}</label>
            <input type="text" class="form-control skill-name" id="skillName-${skillCount}" placeholder="Skill">
        </div>
        <div class="col-md-5">
            <label for="skillLevel-${skillCount}" class="form-label mb-1">Level</label>
            <select class="form-select skill-level" id="skillLevel-${skillCount}">
                <option value="Beginner">Beginner</option>
                <option value="Intermediate" selected>Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Expert">Expert</option>
            </select>
        </div>
        <div class="col-md-2 d-flex justify-content-end">
            <button class="btn btn-danger btn-sm remove-skill">
                <i class="bx bx-trash"></i>
            </button>
        </div>
    `;

    skillsList.appendChild(newSkillDiv);
    newSkillDiv.querySelector('.remove-skill').addEventListener("click", () => {
        newSkillDiv.remove();
        updateAllPreviews();
    });
    newSkillDiv.querySelectorAll('input, select').forEach(input => {
        input.addEventListener('input', updateAllPreviews);
    });
    updateAllPreviews();
});

// Color Swatch
document.querySelectorAll('.color-swatch').forEach(swatch => {
    swatch.addEventListener('click', () => {
        document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));

        swatch.classList.add('active');

        const newColor = swatch.getAttribute('data-color');

        const resumeHeader = document.querySelector('.resume-header');
        if (resumeHeader) {
            resumeHeader.style.backgroundColor = newColor;
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const defaultColor = document.querySelector('.color-swatch.active').getAttribute('data-color');
    const resumeHeader = document.querySelector('.resume-header');
    if (resumeHeader) {
        resumeHeader.style.backgroundColor = defaultColor;
    }
});
// Color Swatch end

// Export PDF (simple)
document.getElementById("exportBtn").addEventListener("click", () => {
    window.print();
});

// Helper Function: Update ALL Previews
function updateAllPreviews() {
    const cvPreview = document.getElementById("cvPreview");

    // Cek apakah ada data yang diisi
    const hasContent = document.getElementById("fullName").value ||
        document.getElementById("email").value ||
        document.getElementById("phone").value ||
        document.getElementById("location").value ||
        document.getElementById("website").value ||
        document.getElementById("linkedin").value ||
        document.getElementById("summary").value ||
        document.querySelectorAll(".experience-form").length > 0 ||
        document.querySelectorAll(".education-form").length > 0 ||
        document.querySelectorAll(".skill-form-row").length > 0;

    // Tampilkan konten "Start Building" jika form masih kosong
    if (!hasContent) {
        cvPreview.innerHTML = `
            <div class="text-center p-5">
                <h5 class="fw-bold">Mulai Buat CV Kamu!</h5>
                <p class="text-secondary">Isi form di sebelah kiri untuk lihat preview CV di sini</p>
            </div>
        `;
        return; // Hentikan fungsi
    }

    // Jika ada konten, render ulang seluruh preview
    cvPreview.innerHTML = '';

    // 1. Ambil data Personal Info
    const fullName = document.getElementById("fullName").value || "Nama Kamu";
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const location = document.getElementById("location").value;
    const website = document.getElementById("website").value;
    const linkedin = document.getElementById("linkedin").value;
    const summary = document.getElementById("summary").value;

    const activeColor = document.querySelector('.color-swatch.active').getAttribute('data-color');
    const headerHTML = `
        <div class="resume-header" style="background-color: ${activeColor};">
            <h3 class="fw-bold">${fullName}</h3>
            <div class="contact-info gap-1">
                ${email ? `<div class="contact-info-item"><i class='bx bxs-envelope'></i><span>${email}</span></div>` : ''}
                ${phone ? `<div class="contact-info-item"><i class='bx bxs-phone'></i><span>${phone}</span></div>` : ''}
                ${location ? `<div class="contact-info-item"><i class='bx bxs-map'></i><span>${location}</span></div>` : ''}
                ${website ? `<div class="contact-info-item"><i class='bx bx-globe'></i><span>${website}</span></div>` : ''}
                ${linkedin ? `<div class="contact-info-item"><i class='bx bxl-linkedin-square'></i><span>${linkedin}</span></div>` : ''}
            </div>
        </div>
        ${summary ? `<p>${summary}</p>` : ''}
    `;
    cvPreview.innerHTML += headerHTML;

    // 2. Update Experience
    const experienceForms = document.querySelectorAll("#experienceList .experience-form");
    if (experienceForms.length > 0) {
        const previewExperienceHTML = document.createElement('div');
        previewExperienceHTML.innerHTML = `<h5 class="section-title">Work Experience</h5><ul class="section-list"></ul>`;
        const experienceList = previewExperienceHTML.querySelector('ul');

        experienceForms.forEach(form => {
            const position = form.querySelector(".exp-position").value;
            const company = form.querySelector(".exp-company").value;
            const expLocation = form.querySelector(".exp-location").value;
            const startDate = form.querySelector(".exp-start-date").value;
            const endDate = form.querySelector(".exp-end-date").value;
            const isCurrent = form.querySelector(".exp-current-job").checked;
            const description = form.querySelector(".exp-description").value;
            const formattedDescription = description.replace(/\n/g, '<br>');

            if (position && company) {
                const li = document.createElement("li");
                li.classList.add('experience-item');
                let dates = "";
                if (startDate) {
                    dates += `<i class='bx bx-calendar'></i> ${startDate}`;
                }
                if (isCurrent) {
                    dates += " - Present";
                } else if (endDate) {
                    dates += ` - <i class='bx bx-calendar'></i> ${endDate}`;
                }

                li.innerHTML = `
                    <h6><strong>${position}</strong> at ${company}</h6>
                    <div class="d-flex justify-content-between">
                        <p class="text-muted">${expLocation}</p>
                        <span class="text-muted">${dates}</span>
                    </div>
                    <p class="description mt-2">${formattedDescription}</p>
                `;
                experienceList.appendChild(li);
            }
        });
        cvPreview.appendChild(previewExperienceHTML);
    }

    // 3. Update Education
    const educationForms = document.querySelectorAll("#educationList .education-form");
    if (educationForms.length > 0) {
        const previewEducationHTML = document.createElement('div');
        previewEducationHTML.innerHTML = `<h5 class="section-title">Education</h5><ul class="section-list"></ul>`;
        const educationList = previewEducationHTML.querySelector('ul');

        educationForms.forEach(form => {
            const degree = form.querySelector(".edu-degree").value;
            const institution = form.querySelector(".edu-institution").value;
            const eduLocation = form.querySelector(".edu-location").value;
            const gradDate = form.querySelector(".edu-grad-date").value;
            const gpa = form.querySelector(".edu-gpa").value;

            if (degree && institution) {
                const li = document.createElement("li");
                li.classList.add('education-item');
                li.innerHTML = `
                    <h6><strong>${degree}</strong> at ${institution}</h6>
                    <div class="d-flex justify-content-between">
                        <p class="text-muted">${eduLocation} | GPA: ${gpa}</p>
                        ${gradDate ? `<span class="text-muted"><i class='bx bx-calendar'></i> ${gradDate}</span>` : ''}
                    </div>
                `;
                educationList.appendChild(li);
            }
        });
        cvPreview.appendChild(previewEducationHTML);
    }

    // 4. Update Skills
    const skillForms = document.querySelectorAll("#skillsList .skill-form-row");
    if (skillForms.length > 0) {
        const previewSkillsHTML = document.createElement('div');
        previewSkillsHTML.innerHTML = `<h5 class="section-title">Skills</h5><ul class="skills-list"></ul>`;
        const skillsList = previewSkillsHTML.querySelector('ul');

        skillForms.forEach(form => {
            const skillName = form.querySelector(".skill-name").value;
            const skillLevel = form.querySelector(".skill-level").value;

            if (skillName) {
                const li = document.createElement("li");
                li.classList.add('skill-badge');
                li.textContent = `${skillName} (${skillLevel})`;
                skillsList.appendChild(li);
            }
        });
        cvPreview.appendChild(previewSkillsHTML);
    }
}