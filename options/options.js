const ext = (typeof browser !== 'undefined') ? browser : (typeof chrome !== 'undefined' ? chrome : {});

function save(e) {
	// uhh whatever
	let v = len.value
	v = v > 15 ? 15 : v
	// local vs sync probs no big deal in performance - hoping it is cached somewhere.
	ext.storage && ext.storage.sync && ext.storage.sync.set && ext.storage.sync.set({
		len: v,
		host: host.value,
		key: key.value,
		secret: secret.value
	})
}


function restore() {
	(ext.storage && ext.storage.sync && ext.storage.sync.get ? ext.storage.sync.get() : Promise.resolve({}))
	.then(values => {
		len.value = values.len || ''
		host.value = values.host || ''
		key.value = values.key || ''
		secret.value = values.secret || ''
	})
}


len.addEventListener('change', save)
host.addEventListener('change', save)
key.addEventListener('change', save)
secret.addEventListener('change', save)
document.addEventListener('DOMContentLoaded', restore)

