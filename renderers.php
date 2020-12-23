<?php

defined('MOODLE_INTERNAL') || die();

class theme_academy_string_manager_standard extends core_string_manager_standard
{

	public function get_list_of_translations($returnall = false)
	{
		global $CFG;

		$languages = array();

		echo "123123";
		die;
		$cachekey = 'list_' . $this->get_key_suffix();
		$cachedlist = $this->menucache->get($cachekey);
		if ($cachedlist !== false) {
			// The cache content is invalid.
			if ($returnall or empty($this->translist)) {
				return $cachedlist;
			}
			// Return only enabled translations.
			foreach ($cachedlist as $langcode => $langname) {
				if (array_key_exists($langcode, $this->translist)) {
					$languages[$langcode] = !empty($this->transaliases[$langcode]) ? $this->transaliases[$langcode] : $langname;
				}
			}

			// If there are no valid enabled translations, then return all languages.
			if (!empty($languages)) {
				return $languages;
			} else {
				return $cachedlist;
			}
		}

		// Get all languages available in system.
		$langdirs = get_list_of_plugins('', 'en', $this->otherroot);
		$langdirs["$CFG->dirroot/lang/en"] = 'en';

		// We use left to right mark to demark the shortcodes contained in LTR brackets, but we need to do
		// this hacky thing to have the utf8 char until we go php7 minimum and can simply put \u200E in
		// a double quoted string.
		$lrm = json_decode('"\u200E"');

		// Loop through all langs and get info.
		foreach ($langdirs as $lang) {
			if (strrpos($lang, '_local') !== false) {
				// Just a local tweak of some other lang pack.
				continue;
			}
			if (strrpos($lang, '_utf8') !== false) {
				// Legacy 1.x lang pack.
				continue;
			}
			if ($lang !== clean_param($lang, PARAM_SAFEDIR)) {
				// Invalid lang pack name!
				continue;
			}
			$string = $this->load_component_strings('langconfig', $lang);
			if (!empty($string['thislanguage'])) {
				$languages[$lang] = $string['thislanguage'] . ' ' . $lrm . '(' . $lang . ')' . $lrm;
			}
		}

		core_collator::asort($languages);

		// Cache the list so that it can be used next time.
		$this->menucache->set($cachekey, $languages);

		if ($returnall or empty($this->translist)) {
			return $languages;
		}

		$cachedlist = $languages;

		// Return only enabled translations.
		$languages = array();
		foreach ($cachedlist as $langcode => $langname) {
			if (isset($this->translist[$langcode])) {
				$languages[$langcode] = !empty($this->transaliases[$langcode]) ? $this->transaliases[$langcode] : $langname;
			}
		}

		// If there are no valid enabled translations, then return all languages.
		if (!empty($languages)) {
			return $languages;
		} else {
			return $cachedlist;
		}
	}

	/**
	 * Returns localised list of currencies.
	 *
	 * @param string $lang moodle translation language, null means use current
	 * @return array currency code => localised currency name
	 */
	public function get_list_of_currencies($lang = null)
	{
		if ($lang === null) {
			$lang = current_language();
		}

		$currencies = $this->load_component_strings('core_currencies', $lang);
		asort($currencies);

		return $currencies;
	}
}
