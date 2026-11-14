export function matches(species, query = '', group = '') {
 const normalized = query.trim().toLocaleLowerCase();
 return species.filter(s => (!group || s.group === group) &&
 [s.name,s.scientific,s.habitat,s.range,s.group].join(' ').toLocaleLowerCase().includes(normalized));
}
