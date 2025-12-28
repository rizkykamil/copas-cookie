# Product Requirements Document (PRD)
## Cookie Manager - Copy Paste Application

**Version:** 1.0  
**Date:** December 28, 2025  
**Status:** Active Development

---

## 1. Executive Summary

Cookie Manager adalah aplikasi web sederhana yang memungkinkan admin untuk mengelola dan membagikan nilai cookies dari berbagai website, sementara user biasa hanya dapat melihat dan menyalin nilai cookies tersebut. Setiap entry cookie akan otomatis dihapus setelah 1 jam tanpa notifikasi.

---

## 2. Problem Statement

- Pengguna kesulitan untuk berbagi dan menyimpan cookie values dari berbagai website
- Tidak ada sistem terstruktur untuk mengelola cookie shares
- Cookie values memerlukan keamanan dan batasan waktu akses
- Diperlukan cara yang mudah untuk copy-paste cookie values

---

## 3. Solution Overview

Aplikasi web dengan 2 role utama:
- **Admin**: Menambah, mengedit, dan menghapus entry cookie
- **User**: Hanya dapat melihat dan menyalin cookie values

**Key Feature:** Auto-delete setiap entry setelah 1 jam untuk keamanan data.

---

## 4. User Roles & Personas

### 4.1 Admin
- **Persona:** Pengelola yang bertanggung jawab input cookie values
- **Tanggung Jawab:**
  - Menambah website dan cookie values baru
  - Mengedit entry yang sudah ada
  - Menghapus entry manually jika diperlukan
  - Memantau statistik entry aktif
- **Akses:** Admin tab tanpa login requirement

### 4.2 Regular User
- **Persona:** Pengguna yang membutuhkan cookie values
- **Tanggung Jawab:**
  - Browsing entry yang tersedia
  - Copy cookie values
  - Memahami bahwa entry auto-delete 1 jam
- **Akses:** User tab tanpa login requirement

---

## 5. Functional Requirements

### 5.1 Admin Features

#### 5.1.1 Website Management
- [x] Menampilkan preset website populer (Netflix, Instagram, YouTube, TikTok)
- [x] Input nama website custom
- [x] Auto-populate cookie names saat memilih preset

#### 5.1.2 Cookie Management
- [x] Tambah multiple cookies per entry
- [x] Input nama cookie (field auto-filled untuk preset)
- [x] Input nilai cookie (textarea untuk long text)
- [x] Dinamis add/remove cookie field
- [x] Validasi minimal 1 cookie per entry

#### 5.1.3 Entry Operations
- [x] Simpan entry baru dengan timestamp
- [x] View semua entry dengan timer countdown
- [x] Edit entry (via delete + re-add)
- [x] Delete entry secara manual
- [x] Copy individual cookie value
- [x] Display statistics (active entries, total cookies)

#### 5.1.4 Preset System
- [x] Netflix: SecureNetflixId, NetflixId, authUser, flwssb
- [x] Instagram: sessionid, csrftoken, ig_did, ig_nrcb
- [x] YouTube: HSID, SSID, APISID, LOGIN_INFO
- [x] TikTok: sessionid, tt_webid, ttwid, odin_tt
- [x] Custom: manual input

### 5.2 User Features

#### 5.2.1 Browsing
- [x] View semua active entries
- [x] Filter by website (optional enhancement)
- [x] Lihat countdown timer untuk setiap entry
- [x] Search functionality (optional enhancement)

#### 5.2.2 Copy Operation
- [x] Copy individual cookie value
- [x] Copy feedback notification
- [x] Show copy success message

#### 5.2.3 Visibility
- [x] Entry auto-hidden setelah 1 jam
- [x] Tidak ada notifikasi untuk expiration
- [x] Entry langsung hilang dari UI

### 5.3 Auto-Delete Mechanism

#### 5.3.1 Timer Logic
- [x] Setiap entry tracked dengan createdAt timestamp
- [x] 1 jam = 3,600,000 milliseconds
- [x] Timer countdown live update setiap detik
- [x] Entry auto-removed dari database saat expired

#### 5.3.2 Display
- [x] Show remaining time dalam format "Xm Ys"
- [x] Warning color (merah) saat < 5 menit
- [x] Normal color (kuning) saat masih > 5 menit

#### 5.3.3 Behavior
- [x] Entri benar-benar dihapus (tidak ada archive)
- [x] Tidak ada notifikasi sebelum deletion
- [x] Silent removal - langsung hidden

---

## 6. Non-Functional Requirements

### 6.1 Performance
- [x] Load time < 2 seconds
- [x] Responsive pada semua device size
- [x] Real-time timer update setiap 1 detik
- [x] Smooth animation pada entry add/remove

### 6.2 Usability
- [x] Intuitive UI tanpa dokumentasi kompleks
- [x] Clear visual feedback untuk semua action
- [x] Accessible color contrast (WCAG AA)
- [x] Mobile-friendly design

### 6.3 Security
- [x] No authentication required (by design)
- [x] Data stored locally in browser (localStorage)
- [x] No data sent to backend
- [x] No sensitive data logging

### 6.4 Reliability
- [x] Timer accuracy
- [x] Data persistence across browser session
- [x] Handle edge cases (browser refresh, tab switching)
- [x] Graceful degradation jika localStorage unavailable

---

## 7. Data Model

```json
{
  "entries": [
    {
      "id": "timestamp_number",
      "website": "Netflix",
      "cookies": [
        {
          "name": "SecureNetflixId",
          "value": "cookie_value_here"
        }
      ],
      "createdAt": "timestamp_ms"
    }
  ]
}
```

**Storage:** Browser localStorage (key: `cookieManagerDB`)

---

## 8. User Interface

### 8.1 Layout
- Header dengan title dan subtitle
- Tab navigation (Admin / User)
- Tab content area dengan responsive grid

### 8.2 Admin Tab
- Info box dengan penjelasan auto-delete
- Statistics card (Active Entries, Total Cookies)
- Preset website buttons
- Form untuk input website name
- Form untuk input cookies (dynamic fields)
- Button actions (Save, Reset)
- Entry list dengan cards

### 8.3 User Tab
- Info box dengan penjelasan sharing
- Statistics card (Entry Tersedia)
- Entry list dengan cards (read-only)
- Empty state jika tidak ada entry

### 8.4 Components
- **Entry Card:** Display website name, cookies, timer
- **Cookie Item:** Display cookie name + value + copy button
- **Statistics:** Active entries count dan total cookies
- **Feedback:** Toast notification untuk copy action

---

## 9. Success Metrics

- [x] User dapat membuat entry dalam < 30 detik
- [x] Admin dapat manage cookies tanpa refresh
- [x] User dapat copy cookie value dengan 1 click
- [x] Entry otomatis hilang tepat pada 1 jam
- [x] Zero errors dalam daily usage

---

## 10. Future Enhancements

1. **Search & Filter**
   - Search by website name
   - Filter by date created
   - Sort by website / date

2. **Advanced Preset**
   - Add lebih banyak website presets
   - Custom preset management
   - Edit preset untuk admin

3. **Export/Import**
   - Backup entries ke JSON
   - Import dari file
   - Bulk operations

4. **Analytics**
   - Track most used websites
   - Cookie usage statistics
   - Entry history (optional)

5. **UI/UX**
   - Dark mode toggle (already implemented)
   - Custom theme colors
   - Entry tagging/categorization

6. **Security**
   - Optional password protection
   - Entry expiry customization (< 1 jam)
   - Activity logging (local only)

---

## 11. Assumptions & Constraints

### Assumptions
- Users understand cookie security risks
- Browser localStorage available di semua user browsers
- No backend infrastructure needed
- Users tidak share credentials via this app

### Constraints
- LocalStorage size limit (~5-10MB per domain)
- Works only dalam single browser/device
- Data lost saat clear browser data
- No cross-device sync
- No backup mechanism built-in

---

## 12. Acceptance Criteria

**Admin:**
- [ ] Can select preset website dan auto-fill cookies
- [ ] Can input custom website name
- [ ] Can add/remove cookie fields dynamically
- [ ] Can save entry dengan validasi
- [ ] Can view all active entries dengan timer
- [ ] Can delete entry manually
- [ ] Can copy cookie values
- [ ] Statistics update real-time

**User:**
- [ ] Can view all active entries
- [ ] Can see remaining timer untuk each entry
- [ ] Can copy cookie values
- [ ] Entry auto-hidden setelah 1 jam
- [ ] No notification saat entry expired

**System:**
- [ ] Timer akurat (±1 detik)
- [ ] Entry truly deleted setelah 1 jam
- [ ] Data persist across browser session
- [ ] UI responsive pada mobile/tablet/desktop

---

## 13. Timeline & Milestones

**Phase 1: MVP (Completed)**
- Basic structure & layout
- Admin form dan entry management
- User view dengan copy function
- 1-hour auto-delete mechanism
- LocalStorage integration

**Phase 2: Polish & Testing (Planned)**
- Bug fixes & edge case handling
- Performance optimization
- Browser compatibility testing
- Mobile responsiveness refinement

**Phase 3: Enhancement (Future)**
- Advanced features (search, filter, export)
- Additional website presets
- Analytics & reporting

---

## 14. Contact & Support

**Product Owner:** [Your Name]  
**Development Team:** [Team Name]  
**Last Updated:** December 28, 2025

---

**Document Version Control:**
| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Dec 28, 2025 | Initial release |
