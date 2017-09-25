/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License") +  you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
package org.apache.openmeetings.service.mail.template;

import org.apache.openmeetings.db.dao.basic.ConfigurationDao;
import org.apache.wicket.core.util.string.ComponentRenderer;
import org.apache.wicket.markup.html.basic.Label;
import org.apache.wicket.markup.html.link.ExternalLink;

public class FeedbackTemplate extends AbstractTemplatePanel {
	private static final long serialVersionUID = 1L;

	public FeedbackTemplate(String username, String email, String message) {
		super(getOmSession().getLocale());
		add(new Label("appname", getBean(ConfigurationDao.class).getAppName()));
		add(new Label("username", username));
		add(new Label("email", email));
		add(new Label("message", message));
		add(new ExternalLink("invitation_link", ""));
	}

	public static String getEmail(String username, String email, String message) {
		return ComponentRenderer.renderComponent(new FeedbackTemplate(username, email, message)).toString();
	}
}
